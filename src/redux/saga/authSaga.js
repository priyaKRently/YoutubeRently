import { takeEvery, put, takeLatest, call } from 'redux-saga/effects'
import { authConfig, logoutConfig } from '../../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    access_Token,
    authenticate_User,
    logout_User,
    request_Refresh_Token,
    set_Token
} from '../constant';
import { requestRefreshToken } from '../action/authAction';

const saveTokenToAsyncStorage = (idToken) => {
    AsyncStorage.setItem('authData', JSON.stringify(idToken))
};

function* getToken() {
    const auth = yield call(authConfig);
    const idToken = auth.idToken;
    // console.log(idToken,'idtoken')
    saveTokenToAsyncStorage(idToken);
    yield put({ type: set_Token, auth })
}
function* logout() {
    const auth = yield call(logoutConfig);
    const idToken = auth;
    // console.log(idToken,'idtoken')
    // saveTokenToAsyncStorage(idToken);
    yield put({ type: set_Token, auth })
}

function* watcherGetToken() {
    try {
        yield takeLatest(authenticate_User, getToken);
        yield takeEvery(request_Refresh_Token, requestRefreshToken);
        yield takeLatest(logout_User, logout);
    } catch (error) {
        console.error(error)
    }
}

export default watcherGetToken;