import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../screen/Home'
import Subscription from '../screen/Subscription'
import Sorts from '../screen/Sorts'

import HomeIcon from 'YoutubeRently/assest/svg/video-svgrepo-com.svg'
import SortsIcon from 'YoutubeRently/assest/svg/cd-svgrepo-com.svg'
import SubscriptionIcon from 'YoutubeRently/assest/svg/material-svgrepo-com.svg'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#A0AAC0',
            tabBarActiveTintColor: '#E76161',
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 500
            },
            tabBarStyle: {
                height: 60,
                backgroundColor: '#F0E9FF',
                paddingBottom: 5,
                position: 'absolute',
                // margin:5,
                // padding:10,
                borderTopColor: 'rgba(0, 0, 0, .2)',
            },
        }}
        >
            <Tab.Screen name='Home' component={Home}
                options={() => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: () => {
                        return <HomeIcon height={25} width={25} />
                    }
                })} />
            <Tab.Screen name='Sorts' component={Sorts}
                options={() => ({
                    tabBarLabel: 'Sorts',
                    tabBarIcon: () => {
                        return <SortsIcon height={25} width={25} />
                    }
                })} />
            <Tab.Screen name='Subscription' component={Subscription}
                options={() => ({
                    tabBarLabel: 'Channel',
                    tabBarIcon: () => {
                        return <SubscriptionIcon height={25} width={25} />
                    }
                })} />


        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})