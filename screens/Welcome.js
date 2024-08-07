import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

//Import Screens
import Cookbook from "./../screens/Cookbook";
import Planner from "./../screens/Planner";
import Search from "./../screens/Search";
import Shop from "./../screens/Shop";
import Profile from "./../screens/Profile";
import Login from "./../screens/Login";


const Tab = createBottomTabNavigator();

const Welcome = ({navigation}) => {
    return (
        <Tab.Navigator initialRouteName="Search">
            <Tab.Screen name="Cookbook" component={Cookbook} options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="book" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Planner" component={Planner} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="calendar" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="search1" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Shop" component={Shop} options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="shop" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Profile" component={Login} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="account-circle" size={24} color="black" />
                )
            }} />
        </Tab.Navigator>
    )
};

export default Welcome;