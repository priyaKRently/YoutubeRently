import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Youtube from 'YoutubeRently/assest/svg/youtube.svg'
import Person from 'YoutubeRently/assest/svg/account-avatar-multimedia-svgrepo-com.svg'
import Search from 'YoutubeRently/assest/svg/search-svgrepo-com.svg'
import { fetchVideoRequest } from '../redux/action/videoAction'
import { useDispatch } from 'react-redux'
const Header = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
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
            <View >
                <TouchableOpacity onPress={() => dispatch(fetchVideoRequest())}
                    style={{ flexDirection: 'row' }}>
                    <Youtube width={50} height={50} />
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#f06451', }}>YouTube</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                padding: 5,
                // margin:10,
                // justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                {/* <TextInput placeholder='Whats on Your mind ?'
                style={{
                    borderRadius:30,
                    borderWidth:2,
                    width:'70%',
                    textAlign:'center',
                    fontSize:18,
                }}
                value={value}
                onChangeText={(text)=>setValue(text)}/> */}

                <TouchableOpacity onPress={() => navigation.navigate('Search')}
                    style={{ marginRight: 20 }}>
                    <Search width={30} height={30} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Person width={30} height={30} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Header

const styles = StyleSheet.create({})