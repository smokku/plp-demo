// @flow
/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */
import * as React from 'react'
import classNames from 'classnames'

import './color-selector.scss'

import { mapColor } from '../state/ducks/items'

import type { Color } from '../state/ducks/items'

type Props = {|
  className?: string,
  selected: Color,
  colors: Array<Color>,
  onSelect: Color => void,
|}

/**
 * Allows selecting one of given colors.
 */
class ColorSelector extends React.PureComponent<Props> {
  static defaultProps = {
    className: '',
  }

  render() {
    const {
      className, selected, colors, onSelect,
    } = this.props
    return (
      <div className={classNames('color-selector', className)}>
        {colors.map(color => (
          <a
            key={color}
            role="button"
            className={classNames('color-button', { selected: color === selected })}
            style={{ backgroundColor: mapColor(color) }}
            onClick={() => onSelect(color)}
          >
            {''}
          </a>
        ))}
      </div>
    )
  }
}

export default ColorSelector
