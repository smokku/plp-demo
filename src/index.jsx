// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import Main from './views/main'
import './index.scss'

UIkit.use(Icons)

if (document.body) {
  ReactDOM.render(<Main />, document.body.appendChild(document.createElement('div')))
} else {
  window.console.error('No BODY element found!')
}
