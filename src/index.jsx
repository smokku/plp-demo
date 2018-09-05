// @flow strict
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const root = document.getElementById('root')
if (root) {
  ReactDOM.render(<div />, root)
} else {
  window.console.error('No #root element found!')
}
