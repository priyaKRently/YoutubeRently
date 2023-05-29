import { View, Text } from 'react-native'
import React from 'react'
import Route from './src/navigation/Route'
import { Provider } from 'react-redux'
import VideoPlayer from './src/component/VideoPlayer'
import store from './src/redux/store'
import Search from './src/component/Search'

import SignIn from './src/screen/Playlist'
const App = () => {
  return (
    <Provider store={store}>
      <Route />
      {/* <VideoPlayer/> */}
      {/* <Search/> */}
    </Provider>

  )
}

export default App