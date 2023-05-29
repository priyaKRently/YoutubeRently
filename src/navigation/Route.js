import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useDispatch, useSelector } from 'react-redux'
import { requestRefreshToken, setRefreshToken } from '../redux/action/authAction'


import Profile from '../screen/Profile'
import Login from '../screen/Login'
import Home from '../screen/Home'
import Search from '../component/Search'
import Header from '../component/Header'
import Tab from './Tab'
import VideoPlayer from '../component/VideoPlayer'

const Stack = createNativeStackNavigator();


const Route = () => {
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch();

    return (
        <NavigationContainer theme={DefaultTheme}>
            <Stack.Navigator >

                {auth?.idToken ? (
                    <Stack.Group>
                        <Stack.Screen name='Tab' component={Tab} options={{ headerShown: false }} />
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
                        <Stack.Screen name='Header' component={Header} options={{ headerShown: false }} />
                        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
                        <Stack.Screen name='VideoPlayer' component={VideoPlayer} options={{ headerShown: false }} />

                    </Stack.Group>
                ) : (
                    <Stack.Group>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route