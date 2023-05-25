import { combineReducers } from '@reduxjs/toolkit';
import videoReducer from './videoReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  video: videoReducer,
  search: searchReducer,
});

export default rootReducer;
