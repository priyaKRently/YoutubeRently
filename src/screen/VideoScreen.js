import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import RecommendedVideos from '../component/RecommendedVideos';

const VideoScreen = ({ navigation, route }) => {
  const { video } = route.params;

  return (
    <View style={styles.container}>
      {/* Render the video player using the selected video */}
      <Text style={styles.videoTitle}>{video.snippet.title}</Text>

      <View style={styles.videoPlayer}>
        {/* Your video player component goes here */}
      </View>

      <View style={styles.recommendedVideos}>
        {/* Render the recommended videos */}
        <RecommendedVideos videoId={video.id.videoId} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoPlayer: {
    // Style your video player container
  },
  recommendedVideos: {
    flex: 1,
    marginTop: 10,
  },
};

export default VideoScreen;
