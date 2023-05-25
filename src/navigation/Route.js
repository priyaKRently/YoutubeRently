import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
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

const Stack = createNativeStackNavigator();

const Route = () => {
    const auth = useSelector(state => state.auth.auth)
    // console.log(auth.auth.idToken)
    const dispatch = useDispatch();

    useEffect(() => {
        const login = async () => {
            const authData = await AsyncStorage.getItem('authData');
            if (!authData) {
                return;
            }

            const idToken = await JSON.parse(authData);
            // if (new Date(expiryDate) <= new Date() ||
            //     !accessToken || !refreshToken) {
            //     dispatch(requestRefreshToken(refreshToken));
            //     return;
            // }
            // dispatch(setRefreshToken({ accessToken, refreshToken }));
        };
        login();
    }, [dispatch]);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                {auth?.idToken ? (
                    <Stack.Group>
                        <Stack.Screen name='Tab' component={Tab}/>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name='Header' component={Header} />
                        <Stack.Screen name='Search' component={Search} />
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