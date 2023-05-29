import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchVideoRequest, fetchVideosSuccess } from '../redux/action/nextAction';

const VideoList = ({ navigation }) => {
    const handleVideoClick = (video) => {
        navigation.navigate('VideoScreen', { video });
    };
    const videos = useSelector((state) => state.next.videos)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVideoRequest())
    }, [dispatch])

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={()=> handleVideoClick(item)}>
                    <Card id={item.id}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        channelId={item.snippet.channelId}
                    />
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <View>
            {/* Render your video list using the videos state */}
            <FlatList
                data={videos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            // ListFooterComponent={renderLoader}
            // onEndReached={loadMoreItem}
            // onEndReachedThreshold={0}
            />
        </View>
    );
};


export default VideoList;

// const mapStateToProps = (state) => ({
//     // fetchVideosRequest: state.video.recommendedVideos,
//     videos: state.video.videos,
//     nextPageToken: state.video.nextPageToken,
//     loading: state.video.loading,
// });

// const mapDispatchToProps = {
//     fetchVideoRequest,
//     fetchVideosSuccess
// };

// export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
