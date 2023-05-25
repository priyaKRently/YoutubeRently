import { all } from 'redux-saga/effects';
import watchFetchVideo from './videoSaga';
import watcherGetToken from './authSaga';
import watchFetchSearch from './searchSaga';

export default function* rootSaga() {
  yield all([
    watcherGetToken(),
    watchFetchVideo(),
    watchFetchSearch(),
  ]);
}
