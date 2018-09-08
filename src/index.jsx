// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import './index.scss'

UIkit.use(Icons)

const root = document.getElementById('root')
if (root) {
  ReactDOM.render(<div />, root)
} else {
  window.console.error('No #root element found!')
}
