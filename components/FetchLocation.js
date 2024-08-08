import React, { useEffect, useState, useRef } from 'react';
import { Text, ActivityIndicator, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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

        // Calculate the distance
        const distanceInMeters = getDistance(
          { latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude },
          { latitude: starbirdchicken.latitude, longitude: starbirdchicken.longitude }
        );
        const distanceInMiles = distanceInMeters * 0.000621371; // Convert meters to miles
        setDistance(distanceInMiles);

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

    const [query, setQuery] = useState('');

    const handleChange = (text) => {
        setQuery(text);
    };

    const handleSearch = () => {
        // Perform search action with query
        console.log('Searching for:', query);
    };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <View style={styles.topbar}>

            <LocationContainer>
                <InnerLocationContainer>
                    <Feather
                        name="search"
                        size={20}
                        color="black"
                        style={{ marginLeft: 8, marginRight: 8 }}
                    />
                    <SearchTextInput
                        placeholder="Type to search . . ."
                        value={query}
                        onChangeText={handleChange}
                        onSubmitEditing={handleSearch}
                    />
                    {query.length > 0 && (
                        <TouchableOpacity onPress={() => setQuery('')}>
                            <Feather name="x" size={30} color="black" />
                        </TouchableOpacity>
                    )}
                </InnerLocationContainer>
            </LocationContainer>

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
                <Marker
                    coordinate={starbirdchicken}
                    title="Starbird Chicken"
                    description={`~ ${distance ? distance.toFixed(2) + ' miles away' : ''}`}
                />
            </MapView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center', // Ensure the map is centered in the container
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  topbar: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  }
});

export default FetchLocation;
