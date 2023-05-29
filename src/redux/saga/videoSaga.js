import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchVideoData } from '../../api/youtube';

import {set_Video,fetch_Video_Request} from '../constant'

function* fetchVideo() {
  try {
    // console.log('222')
    // Make API request to fetch videos
    const response = yield call(fetchVideoData);

    // // const videos = response.data;
    // console.log(response,'response')
    // // Dispatch success action
    yield put({type:set_Video, response});

  } catch (error) {
    // Dispatch error action
    console.log('Error:', error);
    // yield put(fetchVideosFailure(error.message))
  }
}

export default function* watchFetchVideo() {
  yield takeLatest(fetch_Video_Request, fetchVideo);
}
