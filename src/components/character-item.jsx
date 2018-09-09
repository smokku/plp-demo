// @flow
import * as React from 'react'
import classNames from 'classnames'

import './character-item.scss'

import type { Category, Color } from '../state/ducks/items'

type Props = {|
  className?: string,
  name: string,
  image: string,
  svg: string,
  category: Category,
  colors: Array<Color>,
  color: Color,
|}

type State = {
  color: Color,
}

/**
 * Card of an item for a character component.
 */
class CharacterItem extends React.PureComponent<Props, State> {
  static defaultProps = {
    className: '',
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    return {
      color: props.color || state.color,
    }
  }

  render() {
    const {
      className, name, image, svg, category,
    } = this.props
    const { color } = this.state
    return (
      <div className={classNames('character-item uk-card uk-card-default', className)}>
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
        </div>
      </div>
    )
  }
}

export default CharacterItem
