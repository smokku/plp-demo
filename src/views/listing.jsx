// @flow
import * as React from 'react'
import classNames from 'classnames'

import CharacterItem from '../components/character-item'

import type { Item } from '../state/ducks/items'

type Props = {|
  className?: string,
  data: Array<Item>,
|}

/**
 * Displays Item listing in a grid.
 */
class Listing extends React.PureComponent<Props> {
  static defaultProps = {
    className: '',
  }

  render() {
    const { className, data } = this.props
    return (
      <div uk-grid="" className={classNames('uk-grid-medium uk-grid-match', className)}>
        {data.map(item => (
          <div className="uk-width-auto" key={item.image}>
            <CharacterItem {...item} />
          </div>
        ))}
      </div>
    )
  }
}

export default Listing
