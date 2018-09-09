// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import configureStore from './state/store'
import { loadItemsData } from './state/ducks/items'
import Main from './views/main'
import './index.scss'

UIkit.use(Icons)

const store = configureStore()

store.dispatch(loadItemsData())

if (document.body) {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>,
    document.body.appendChild(document.createElement('div')),
  )
} else {
  window.console.error('No BODY element found!')
}
