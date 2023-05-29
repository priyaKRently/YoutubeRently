import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchRecommendedData } from '../../api/youtube';

import { fetch_Recommended_Video_Request,fetch_Recommended_Video_Success} from '../constant'

function* fetchRecommendedVideo(action) {
  try {
    // Make API request to fetch videos
    const response = yield call(fetchRecommendedData,action.value);

    // // Dispatch success action
    yield put({type:fetch_Recommended_Video_Success, response});

  } catch (error) {
    // Dispatch error action
    console.log('Error:', error);
  }
}

export default function* watchFetchRecommendedVideo() {
  yield takeLatest(fetch_Recommended_Video_Request, fetchRecommendedVideo);
}
