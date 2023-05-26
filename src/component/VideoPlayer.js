import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YouTube from 'react-native-youtube'
import YoutubeIframe from 'react-native-youtube-iframe'
const VideoPlayer = () => {
  return (
    <View>
      <Text>VideoPlayer</Text>
      <YoutubeIframe height={300} play={true} videoId={'84WIaK3bl_s'}/>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({})