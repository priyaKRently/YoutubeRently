import { combineReducers } from '@reduxjs/toolkit';
import videoReducer from './videoReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
// import nextReducer from './nextReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  video: videoReducer,
  search: searchReducer,
  // next: nextReducer
});

export default rootReducer;
