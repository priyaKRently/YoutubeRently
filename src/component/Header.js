import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Youtube from 'YoutubeRently/assest/svg/youtube.svg'
import Search from 'YoutubeRently/assest/svg/search-svgrepo-com.svg'
import { fetchVideoRequest } from '../redux/action/videoAction'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Header = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.auth)
    // console.log(auth.user)
    // const userInfoData= AsyncStorage.getItem('user_Info')
    // const userInfo = JSON.parse(userInfoData)
    // console.log(userInfo,'USERINFO')

    return (
        <View style={{
            backgroundColor: '#CAEDDE',
            height: 60,
            padding: 4,
            // margin:10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <Youtube width={50} height={50} />
                <Text style={{ fontSize: 32, fontWeight: 'bold',marginLeft:5,}}>Hello {auth.user.givenName}</Text>
            </View>

            <View style={{
                padding: 5,
                // margin:10,
                // justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            }}>

                <TouchableOpacity onPress={() => navigation.navigate('Search')}
                    style={{ marginRight: 20 }}>
                    <Search width={30} height={30} />
                </TouchableOpacity>
                {/* <Image source={{ uri:  }}/> */}
                {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Person width={30} height={30} />
                </TouchableOpacity> */}
            </View>
        </View >
    )
}

export default Header

const styles = StyleSheet.create({})