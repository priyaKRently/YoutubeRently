import { View, Text } from 'react-native'
import React from 'react'
import Route from './src/navigation/Route'
import { Provider } from 'react-redux'

import store from './src/redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>

  )
}

export default App