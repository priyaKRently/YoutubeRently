import { View, Text, FlatList, TouchableOpacity, Image, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchRequest } from '../redux/action/searchAction'
import MiniCard from './MiniCard'

const Search = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.response);
  const [value, setValue] = useState('');
  // console.log(searchData,33)

  const searchList = (value) => {
    // console.log('button clicked')
    Keyboard.dismiss();
    try{
    if (value.trim() !== '') {
      dispatch(fetchSearchRequest(value));
    } } catch {console.log(error)}
    // setValue(null);
    // console.log(videos)
  }

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        justifyContent: 'space-around',
        backgroundColor: '#A4D0A4'
      }}>
        <TouchableOpacity>
          <Text>Back</Text>
        </TouchableOpacity>

        <TextInput
          value={value}
          placeholder='Search for Videos'
          onChangeText={(text) => setValue(text)}
          style={{
            width: '80%',
            height: 45,
            borderWidth: 2,
            borderRadius: 20,
            fontSize: 18,
            textAlign: 'center',
            color: 'white',
            // fontWeight: 500
          }}

        />
        <TouchableOpacity onPress={() => searchList(value)}>
          <Text>Search</Text>
        </TouchableOpacity>

      </View >

      {/* <TouchableOpacity onPress={() => searchList()}>
        <Text style={{ fontSize: 30 }}>Fetch the videos</Text>
      </TouchableOpacity> */}

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
  )
}

export default Search;