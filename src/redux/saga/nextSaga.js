import { put, takeLatest, call } from 'redux-saga/effects';
// import { fetchVideoData } from '../../api/youtube';
import axios from 'axios';
import {
    fetch_Video_Request,
    fetchVideosSuccess,
    fetch_Recommended_Video_Request,
    fetchRecommendedVideoSuccess
} from '../action/nextAction'

function* fetchVideo(action) {
    try {
        const { pageToken } = action.payload;
        const response = yield call(
            axios.get, `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI&type=video&part=snippet&maxResults=10&pageToken=${pageToken}`
        );
        const { data } = response;

        yield put(fetchVideosSuccess(data.items,data.nextPageToken));

    } catch (error) {
        // Dispatch error action
        console.log('Error:', error);
        // yield put(fetchVideosFailure(error.message))
    }
}

function* fetchRecommendedVideos(action) {
    try {
        const {videoId,pageToken}= action.payload;
        const response = yield call(
            axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI&type=video&part=snippet&maxResults=10&relatedToVideoId=${videoId}&pageToken=${pageToken}`)
        );
        const {data} = response;
            yield put(fetchRecommendedVideoSuccess(data.items,data.nextPageToken))
    } catch(error) {
        console.log(error)
    }
}

export default function* watchFetchVideoSaga() {
    yield takeLatest(fetch_Video_Request, fetchVideo);
    yield takeLatest(fetch_Recommended_Video_Request,fetchRecommendedVideos)
}
