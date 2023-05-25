import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useDispatch} from 'react-redux'
import { logoutUser } from '../redux/action/authAction'
const Profile = () => {
  const dispatch = useDispatch()
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={()=>dispatch(logoutUser())}>
        <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})