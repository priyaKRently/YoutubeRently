import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Youtube from 'YoutubeRently/assest/svg/youtube.svg'
import Person from 'YoutubeRently/assest/svg/account-avatar-multimedia-svgrepo-com.svg'
import Search from 'YoutubeRently/assest/svg/search-svgrepo-com.svg'

const Header = () => {
    const navigation = useNavigation()
    const [value,setValue] =useState('')
    return (
        <View style={{
            backgroundColor: '#CAEDDE',
            height: 60,
            padding: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Youtube width={40} height={40}  />
            <View style={{
                padding: 5,
                justifyContent: 'space-between',
                alignItems:'center',
                flexDirection: 'row',
            }}>
                <TextInput placeholder='Whats on Your mind ?'
                style={{
                    borderRadius:30,
                    borderWidth:2,
                    width:'70%',
                    textAlign:'center',
                    fontSize:18,
                }}
                value={value}
                onChangeText={(text)=>setValue(text)}/>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Search width={30} height={30} />
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
                    <Person width={30} height={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})