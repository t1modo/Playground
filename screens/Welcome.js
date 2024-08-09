import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

// Import Screens
import Cookbook from "./../screens/Cookbook";
import Planner from "./../screens/Planner";
import Search from "./../screens/Search";
import Shop from "./../screens/Shop";
import Login from "./../screens/Login";

const Tab = createBottomTabNavigator();

const Welcome = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="Search"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Cookbook') {
                        iconName = 'book';
                        return <AntDesign name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Planner') {
                        iconName = 'calendar';
                        return <FontAwesome name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Search') {
                        iconName = 'search1';
                        return <AntDesign name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Shop') {
                        iconName = 'shop';
                        return <Entypo name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Profile') {
                        iconName = 'account-circle';
                        return <MaterialIcons name={iconName} size={size} color={color} />;
                    }
                },
                tabBarActiveTintColor: 'royalblue', // Change this color to your desired active tab icon color
                tabBarInactiveTintColor: 'powderblue', // Change this color to your desired inactive tab icon color
            })}
        >
            <Tab.Screen name="Cookbook" component={Cookbook} />
            <Tab.Screen name="Planner" component={Planner} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="Profile" component={Login} />
        </Tab.Navigator>
    );
};

export default Welcome;
