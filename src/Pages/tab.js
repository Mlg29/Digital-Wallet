import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Home from "./Home"
import Scan from "./Scan"
import Profile from "./Profile"

import {FontAwesome, AntDesign, MaterialIcons} from "@expo/vector-icons"

const Tabs = () => {

    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <MaterialIcons name="home" size={24} style={focused ? styles.orange : styles.black}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Scan"
                component={Scan}
                options={{
                    tabBarIcon: ({focused}) => (
                        <AntDesign name="scan1" size={24} style={focused ? styles.orange : styles.black} />
                    )
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="user" size={24} style={focused ? styles.orange : styles.black} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
        orange: {
            color: "#3CB371",
        },
        black: {
            color: 'black'
        }
})
