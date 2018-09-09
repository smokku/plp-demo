// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import pkg from '../../package.json'
import MultiDropdown from '../components/multi-dropdown'
import Listing from './listing'

import { setCategoryFilters, setColorFilters } from '../state/ducks/filters'
import { selectAllItems } from '../state/ducks/items'

import type { Items } from '../state/ducks/items'

const CATEGORIES = ['Good', 'Neutral', 'Evil'] // FIXME: fetch from store
const COLORS = ['Red', 'Blue', 'Green', 'Black'] // FIXME: fetch from store

type Props = {|
  items: Items,
  setCategoryFilters: (Array<string>) => void,
  setColorFilters: (Array<string>) => void,
|}

/**
 * Main application component.
 */
class Main extends React.PureComponent<Props> {
  render() {
    const { items, setCategoryFilters, setColorFilters } = this.props // eslint-disable-line no-shadow

    return (
      <div>
        <h1 className="uk-heading-primary uk-heading-divider uk-text-center">{pkg.description}</h1>
        <ul className="uk-subnav uk-margin uk-margin-left">
          <li>
            <MultiDropdown name="Category" options={CATEGORIES} onSelect={setCategoryFilters} />
          </li>
          <li>
            <MultiDropdown name="Color" options={COLORS} onSelect={setColorFilters} />
          </li>
        </ul>
        <hr className="uk-divider-icon" />
        <Listing className="uk-margin uk-margin-left" data={items} />
      </div>
    )
  }
}

export default connect(
  createSelector([selectAllItems], items => ({
    items,
  })),
  {
    setCategoryFilters,
    setColorFilters,
  },
)(Main)
