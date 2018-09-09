// @flow
import * as React from 'react'

import pkg from '../../package.json'

const GithubRibbon = () => (
  <a href={pkg.homepage}>
    <img
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        border: 0,
      }}
      src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
      alt="Fork me on GitHub"
    />
  </a>
)

export default GithubRibbon
