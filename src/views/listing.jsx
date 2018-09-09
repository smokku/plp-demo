// @flow
import * as React from 'react'

import type { Item } from '../state/ducks/items'

type Props = {|
  className: string,
  data: Array<Item>,
|}

/**
 * Displays Item listing.
 *
 * @class Listing
 * @extends {React.PureComponent}
 */
class Listing extends React.PureComponent<Props> {
  render() {
    const { className, data } = this.props
    return (
      <div className={className}>
        {data.map(item => (
          <span key={item.image}>
            {item.name}
            {' '}
          </span>
        ))}
      </div>
    )
  }
}

export default Listing
