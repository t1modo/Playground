import React, { useEffect, useState, useRef } from 'react';
import { Text, ActivityIndicator, View, StyleSheet, Dimensions, Button } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios'; // Import axios for API requests

const GOOGLE_MAPS_API_KEY = 'AIzaSyCUaaIiZTo0_7-DJzBfnfwCqByIIFdpx0s'; // Replace with your API key

// Coordinates for Starbird Chicken
const starbirdchicken = {
  latitude: 37.3822,
  longitude: -121.8961
};

const FetchLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState(null);
  const mapRef = useRef(null); // Create a ref for the MapView

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setLoading(false);
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High, // Request high accuracy
        });
        setLocation(currentLocation.coords);

        // Fetch distance using Google Maps Distance Matrix API
        await fetchDistance(currentLocation.coords.latitude, currentLocation.coords.longitude);

        if (mapRef.current) {
          mapRef.current.animateToRegion({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }, 1000); // Animation duration
        }
      } catch (error) {
        setErrorMsg('Error fetching location');
      } finally {
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  const fetchDistance = async (userLat, userLng) => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
        params: {
          origins: `${userLat},${userLng}`,
          destinations: `${starbirdchicken.latitude},${starbirdchicken.longitude}`,
          key: GOOGLE_MAPS_API_KEY,
        },
      });

      console.log('API Response:', response.data); // Log the full response for debugging

      const result = response.data;
      if (result.rows[0] && result.rows[0].elements[0]) {
        // Convert meters to miles
        const distanceInMeters = result.rows[0].elements[0].distance.value;
        const distanceInMiles = distanceInMeters * 0.000621371; // Convert meters to miles
        setDistance(distanceInMiles.toFixed(2)); // Round to two decimal places
      } else {
        setDistance('Unable to calculate distance');
      }
    } catch (error) {
      console.error('Error fetching distance:', error); // Log any errors
      setErrorMsg('Error fetching distance');
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef} // Attach ref to MapView
            style={styles.map}
            initialRegion={{
              latitude: starbirdchicken.latitude,
              longitude: starbirdchicken.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            showsUserLocation={true} // Optional: Show user location on the map
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title={`Your Location`}
              />
            )}
            <Marker coordinate={starbirdchicken}>
              <Callout>
                <View style={styles.calloutContainer}>
                  <Text>Starbird Chicken</Text>
                  <Text>{distance ? `Distance: ${distance} miles` : 'Calculating distance...'}</Text>
                </View>
              </Callout>
            </Marker>
          </MapView>
          <Button title="Refresh Distance" onPress={() => location && fetchDistance(location.latitude, location.longitude)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FetchLocation;