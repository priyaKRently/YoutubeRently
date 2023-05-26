import { View, Text, FlatList, TouchableOpacity, Image, Button } from 'react-native'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoRequest } from '../redux/action/videoAction'
import Card from '../component/Card'
import Header from '../component/Header'

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.video.response);
  // console.log(videos,'videos')
  useEffect(()=>{
        dispatch(fetchVideoRequest())
  },[dispatch])
  return (
    <View style={{backgroundColor:'#f0fcf5'}}>
      <Header />

      {/* <Button title='Fetch Video' onPress={() => dispatch(fetchVideoRequest())} /> */}
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card id={item.id}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              channelId={item.snippet.channelId} />
          )
        }}
      />
    </View>
  )
}

export default Home;