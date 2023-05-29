import { View, Text, FlatList, TouchableOpacity, Image, Button, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoRequest } from '../redux/action/videoAction'
import Card from '../component/Card'
import Header from '../component/Header'


const Home = () => {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.video.response);

  useEffect(() => {
    dispatch(fetchVideoRequest())
  }, [dispatch])

  //  const renderLoader = () => {
  //    return (
  //      <View style={{ alignItems: 'center',marginBottom:20 }}>
  //        <ActivityIndicator size={'large'} color='#aaa' />
  //      </View>
  //    )
  //  }
  // const  loadMoreItem = () => {
  //   dispatch(fetchVideoRequest())
  // }

  const renderItem = ({ item }) => {
    return (
      <Card id={item.id}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        channelId={item.snippet.channelId}
      />
    )
  }
  return (
    <View style={{ flex: 1, marginBottom: 35 }}>
      <Header />

      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      // ListFooterComponent={renderLoader}
      // onEndReached={loadMoreItem}
      // onEndReachedThreshold={0}
      />

    </View>
  )
}

export default Home;
