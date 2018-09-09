// @flow
/* eslint-disable no-shadow */
import * as React from 'react'
import classNames from 'classnames'

import styles from './character-item.scss'

import ColorSelector from './color-selector'

import type { Category, Color, Price } from '../state/ducks/items'

type Props = {|
  className?: string,
  name: string,
  image: string,
  svg: string,
  category: Category,
  colors: { [Color]: Price },
  color: Color,
|}

type State = {
  color?: Color,
}

/**
 * Card of an item for a character component.
 */
class CharacterItem extends React.PureComponent<Props, State> {
  static defaultProps = {
    className: '',
  }

  state = {
    color: undefined,
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    return {
      color: state.color || props.color,
    }
  }

  render() {
    const {
      className, name, image, svg, category, colors,
    } = this.props
    const { color = 'Red' } = this.state
    return (
      <div className={classNames(styles.self, 'uk-card uk-card-default uk-card-hover', className)}>
        <div className="uk-card-header">
          <h3 className="uk-card-title">{name}</h3>
        </div>
        <div
          className="uk-card-body"
          dangerouslySetInnerHTML={{ __html: svg }}
          alt={image}
          style={{
            filter: `url(#colorize-${color.toLowerCase()})`,
          }}
        />
        <div className="uk-card-footer">
          <h4>{category}</h4>
          <ColorSelector
            className="uk-align-left"
            selected={color}
            colors={Object.keys(colors)}
            onSelect={color => this.setState({ color })}
          />
          <div className="uk-align-right">
            <span role="img" aria-label="cash">
              💰
            </span>
            {' '}
            <span className={styles.price}>{colors[color]}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterItem
