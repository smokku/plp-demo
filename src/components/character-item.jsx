// @flow strict
import * as React from 'react'
import classNames from 'classnames'

type Props = {|
  className?: string,
  name: string,
  image: string,
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
      className, name, image, category,
    } = this.props
    return (
      <div className={classNames('uk-card uk-card-default', className)}>
        <div className="uk-card-header">
          <h3 className="uk-card-title">{name}</h3>
        </div>
        <div className="uk-card-body">
          <img src={image} uk-svg="" alt={name} />
        </div>
        <div className="uk-card-footer">{category}</div>
      </div>
    )
  }
}

export default CharacterItem
