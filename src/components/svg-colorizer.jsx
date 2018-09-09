// @flow strict
import * as React from 'react'

const SvgColorizer = () => (
  <svg style={{ display: 'none' }}>
    <defs>
      <filter id="colorize-red" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="2 0 0 0 0.2
                  0 0.3 0 0 0
                  0 0 0.3 0 0
                  0 0 0 1 0"
        />
      </filter>
      <filter id="colorize-blue" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 -0.5
                  0 1 0 0 -0.3
                  0 0 0 2 0.5
                  0 0 0 1 0"
        />
      </filter>
      <filter id="colorize-green" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.3 0 0 0 0
                  0 1.7 0 0 0
                  0 0 0.3 0 0
                  0 0 0 1 0"
        />
      </filter>
      <filter id="colorize-yellow" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="1.5 0 0 0 0.5
                  0 1.7 0 0 0.3
                  0 0 0.3 0 0
                  0 0 0 1 0"
        />
      </filter>
      <filter id="colorize-purple" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="2 0 0 0 0.3
                  0 0.3 0 0 0
                  0 0 2 0 0.3
                  0 0 0 1 0"
        />
      </filter>
      <filter id="colorize-cyan" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.3 0 0 0 0
                  0 2 0 0 0.1
                  0 0 2 0 0
                  0 0 0 1 0"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgColorizer
