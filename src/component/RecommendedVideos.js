import { View, Text, FlatList, TouchableOpacity, Image, TextInput, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecommendedVideoRequest } from '../redux/action/nextAction'
import MiniCard from './MiniCard'
import { useNavigation } from '@react-navigation/native'

const RecommendedVideos = (props) => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const recommendData = useSelector((state) => state.recommend.response);


  useEffect(() => {
    Keyboard.dismiss();
    try {
      if (props.videoId.trim() !== '') {
        dispatch(fetchRecommendedVideoRequest(props.videoId));
      }
    } catch (error) { console.log(error) }
  }, [props.videoId])


  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <FlatList
          data={recommendData}
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

export default RecommendedVideos;