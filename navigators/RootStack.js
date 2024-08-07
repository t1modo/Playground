import React from "react";
import { Colors } from "../components/styles";
const { primary, tertiary } = Colors;

// React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Login from './../screens/Login';
import Register from './../screens/Register';
import Loading from './../screens/Loading';
import Welcome from './../screens/Welcome';
import Recipe1 from './../screens/Recipe1';
import Stores from './../screens/Stores';
import FriendsList from './../screens/FriendsList';
import Profile from "./../screens/Profile";
import EditProfile from "./../screens/EditProfile";

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
        >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="Recipe1"
                component={Recipe1}
            />
            <Stack.Screen
                name="Stores"
                component={Stores}
            />
            <Stack.Screen
                name="FriendsList"
                component={FriendsList}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
            />
        </Stack.Navigator>
    );
}

export default RootStack;
