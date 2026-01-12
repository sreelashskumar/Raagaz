import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../home/HomeScreen";
import ProfileScreen from "../profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function RootTabs() {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}