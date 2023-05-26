import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchSearchData } from '../../api/youtube';

import {set_Search,fetch_Search_Request} from '../constant'

function* fetchSearch(action) {
  try {
    // console.log('222')
    // console.log('Action' ,action.value)
    const val= action.value
    // Make API request to fetch videos
    const response = yield call(fetchSearchData,val);

    // const searchList = response.data;
    // console.log(response,'response')
    // console.log(searchList,'searchList')

    // // Dispatch success action
    yield put({type:set_Search, response});

  } catch (error) {
    // Dispatch error action
    console.log('Error:', error);
    // yield put(fetchVideosFailure(error.message))
  }
}

export default function* watchFetchSearch() {
  yield takeLatest(fetch_Search_Request, fetchSearch);
}
