import { View, Text, FlatList, TouchableOpacity, Image, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchRequest } from '../redux/action/searchAction'
import MiniCard from './MiniCard'
import { useNavigation } from '@react-navigation/native'
import Back from 'YoutubeRently/assest/svg/211617_b_left_arrow_icon.svg'
import Send from 'YoutubeRently/assest/svg/1564528_fly_messager_send_communication_email_icon.svg'
const Search = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.response);
  const [value, setValue] = useState('');
  // console.log(searchData,33)

  const searchList = (value) => {
    Keyboard.dismiss();
    // console.log('button clicked')


    try {
      if (value.trim() !== '') {
        dispatch(fetchSearchRequest(value));
      }
    } catch { console.log(error) }

  }

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        // padding: 10,
        paddingVertical: 10,
        alignItems: "center",
        // justifyContent: 'space-around',
        backgroundColor: '#A4D0A4'
      }}>
        <TouchableOpacity onPress={()=> navigation.navigate.goBack() }>
          <Back height={45} width={45} />
        </TouchableOpacity>

        <TextInput
          value={value}
          placeholder='Search for Videos'
          onChangeText={(text) => setValue(text)}
          style={{
            width: '75%',
            height: 45,
            borderWidth: 2,
            borderRadius: 20,
            fontSize: 18,
            textAlign: 'center',
            color: 'white',
            marginRight: 10
          }}

        />
        <TouchableOpacity onPress={() => searchList(value)}>
          <Send height={30} width={30} />
        </TouchableOpacity>

      </View >

      {/* <TouchableOpacity onPress={() => searchList()}>
        <Text style={{ fontSize: 30 }}>Fetch the videos</Text>
      </TouchableOpacity> */}
      <View style={{ marginBottom: 10 }}>
        <FlatList
          data={searchData}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => {
            return (

              <MiniCard id={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle} />
            )
          }}
        />
      </View>
    </View>
  )
}

export default Search;