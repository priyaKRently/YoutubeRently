import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/action/authAction'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Profile = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.auth)
  // console.log(auth.user)
  const imageUri = auth.user.photo
  // console.log(imageUri)
  return (
    <View>

      <View style={{ height: 500, marginTop: 70, alignItems: 'center' }}>
        <View style={{backgroundColor:'#c1c4c9', borderRadius:100,elevation:4}}>
          <Image source={{ uri: imageUri }} style={{ height: 150, width: 150, borderRadius: 100,margin:10 }} />
        </View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10, color: 'black' }}>{auth.user.name}</Text>
        <Text style={{ fontSize: 20,  }}>{auth.user.email}</Text>

      </View>
      <TouchableOpacity onPress={() => dispatch(logoutUser())}
        style={{
          borderWidth: 2,
          padding: 5,
          width: 200,
          alignSelf: 'center',
          borderRadius: 10,
          backgroundColor: 'grey',

        }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})