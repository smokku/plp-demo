// @flow
import * as React from 'react'
import classNames from 'classnames'

import './character-item.scss'

type Props = {|
  className?: string,
  name: string,
  image: string,
  svg: string,
  category: string,
  colors: Array<{ [string]: number }>,
|}

/**
 * Card of an item for a character component.
 */
class CharacterItem extends React.PureComponent<Props> {
  static defaultProps = {
    className: '',
  }

  render() {
    const {
      className, name, image, svg, category,
    } = this.props
    return (
      <div className={classNames('character-item uk-card uk-card-default', className)}>
        <div className="uk-card-header">
          <h3 className="uk-card-title">{name}</h3>
        </div>
        <div className="uk-card-body" dangerouslySetInnerHTML={{ __html: svg }} alt={image} />
        <div className="uk-card-footer">{category}</div>
      </div>
    )
  }
}

export default CharacterItem
