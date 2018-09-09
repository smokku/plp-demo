// @flow
import * as React from 'react'
import FlipMove from 'react-flip-move'
import classNames from 'classnames'

import CharacterItem from '../components/character-item'

import type { FullItem } from '../state/ducks/items'

type Props = {|
  className?: string,
  data: Array<FullItem>,
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
      <div uk-grid="" className={classNames('uk-grid-match', className)}>
        <FlipMove>
          {data.map(item => (
            <div className="uk-width-auto" key={`${item.image}-${item.color}`}>
              <CharacterItem {...item} />
            </div>
          ))}
        </FlipMove>
      </div>
    )
  }
}

export default Listing
