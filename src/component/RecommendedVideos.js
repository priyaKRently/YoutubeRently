import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  fetchRecommendedVideoRequest,
  fetchRecommendedVideoSuccess,
} from '../redux/action/nextAction';

const RecommendedVideos = ({
  recommendedVideos,
  recommendedNextPageToken,
  recommendedLoading,
  
  fetchRecommendedVideosSuccess,
  videoId,
}) => {
  console.log(recommendedVideos)
  useEffect(() => {
    fetchRecommendedVideoRequest(videoId, '');
  }, [videoId]);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 10;

    if (
      isEndReached &&
      recommendedNextPageToken &&
      !recommendedLoading
    ) {
      fetchRecommendedVideoRequest(videoId, recommendedNextPageToken);
    }
  };

  return (
    <View onScroll={handleScroll}>
      {/* Render your recommended video list */}
      <FlatList
        data={recommendedVideos}
        keyExtractor={(video) => video.id}
        renderItem={() => {
          return (
            <>
            <Text >Hello{recommendedVideos.snippet.title}</Text>

            </>

          )
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  recommendedVideos: state.video.recommendedVideos,
  recommendedNextPageToken: state.video.recommendedNextPageToken,
  recommendedLoading: state.video.recommendedLoading,
});

const mapDispatchToProps = {
  fetchRecommendedVideoRequest,
  fetchRecommendedVideoSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedVideos);
