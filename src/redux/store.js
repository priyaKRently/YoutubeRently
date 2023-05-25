import { configureStore} from '@reduxjs/toolkit';

import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware =createSagaMiddleware()
const middleware = [sagaMiddleware];
const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

sagaMiddleware.run(rootSaga);

export default store;
