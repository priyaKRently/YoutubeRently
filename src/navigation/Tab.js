import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../screen/Home'
import Playlist from '../screen/Playlist'

import VideoScreen from '../screen/VideoScreen'
import ProfileIcon from 'YoutubeRently/assest/svg/account-avatar-multimedia-svgrepo-com.svg'
import Profile from '../screen/Profile'
import HomeIcon from 'YoutubeRently/assest/svg/video-svgrepo-com.svg'
import SortsIcon from 'YoutubeRently/assest/svg/cd-svgrepo-com.svg'
import SubscriptionIcon from 'YoutubeRently/assest/svg/material-svgrepo-com.svg'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoList from '../component/VideoList'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

        <Tab.Navigator screenOptions={{
            
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
                    headerShown: false,
                    tabBarIcon: () => {
                        return <HomeIcon height={25} width={25} />
                    }
                })} />
            <Tab.Screen name='Profile' component={Profile}
                options={() => ({
                    tabBarLabel: 'Profile',
                    headerTitleAlign:'center',
                    tabBarIcon: () => {
                        return <ProfileIcon height={25} width={25} />
                    }
                })} />
            {/* <Tab.Screen name='VideoList' component={VideoList}
                options={() => ({
                    tabBarLabel: 'Playlist',
                    tabBarIcon: () => {
                        return <SubscriptionIcon height={25} width={25} />
                    }
                })} /> */}


        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})