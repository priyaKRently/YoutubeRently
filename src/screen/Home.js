import { View, Text, FlatList, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoRequest } from '../redux/action/videoAction'
import Card from '../component/Card'
import Header from '../component/Header'

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.video.response);
  // console.log(videos,'videos')
  return (
    <View>
      <Header />

      <Button title='Fetch Video' onPress={() => dispatch(fetchVideoRequest('song'))} />
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card id={item.id}
              title={item.snippet.title}
              channel={item.snippet.channelTitle} />
          )
        }}
      />
    </View>
  )
}

export default Home;