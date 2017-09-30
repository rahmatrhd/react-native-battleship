import React from 'react'
import { Provider } from 'react-redux'

import store from './config/store'
import AppWithNavigationState from './navigators/AppWithNavigationState'

export default props => (
  <Provider store={store}>
    <AppWithNavigationState/>
  </Provider>
)
