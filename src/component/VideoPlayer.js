import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import YouTube from 'react-native-youtube'
import YoutubeIframe from 'react-native-youtube-iframe'
import WebView from 'react-native-webview'
import { useSelector } from 'react-redux'
import RecommendedVideos from './RecommendedVideos'

const VideoPlayer = ({ route }) => {

  const { videoId, title, channel } = route.params

  return (

    <View >
      <View>
        <YoutubeIframe height={240} play={true} videoId={videoId} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{
          fontSize: 20, fontWeight: 500,
          width: Dimensions.get('screen').width - 20,
          color: 'black'
        }}
          numberOfLines={2}
          ellipsizeMode='tail'>
          {title}
        </Text>
        <Text style={{ fontWeight: '500', fontSize: 18 }}> {channel}</Text>

      </View>
      <View style={{ borderBottomWidth: 1 }} />
      <View>
        <Text style={{ margin: 5, fontSize: 20 }}>Recommended Videos</Text>
        <RecommendedVideos videoId={videoId} />
      </View>
      <View style={{margin:22}}></View>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({})

// import { Dimensions, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {WebView} from 'react-native-webview'
// // import {useSelector} from 'react-redux'

// const VideoPlayer = ({ route }) => {
//   //   const videos = useSelector((state) => state.video.response);
//   // const videoId = videos.id
//   // console.log(route.params.videoId)
//   const {videoId,title} = route.params
//   //console.log(title,videoId)
//   return (

//     <View style={{ flex: 1 }}>

//       <View style={{ width: '100%', height: 220 }}>
//         <WebView 
//         allowsFullscreenVideo={true}
//         allowsInlineMediaPlayback={true}
//         mediaPlaybackRequiresUserAction={true}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{uri:`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0`}} />
//       </View>

//       <Text style={{ 
//         fontSize: 20, fontWeight:500,
//         width: Dimensions.get('screen').width - 50,
//         margin:8,
//         color:'black'
//          }}
//          numberOfLines={2}
//          ellipsizeMode='tail'>
//         {title}
//       </Text>
//       <View style={{borderBottomWidth:1}}/>
//     </View>

//   )
// }

// export default VideoPlayer

// const styles = StyleSheet.create({})