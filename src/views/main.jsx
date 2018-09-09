// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import pkg from '../../package.json'
import MultiDropdown from '../components/multi-dropdown'
import Listing from './listing'

import { setCategoryFilters, setColorFilters } from '../state/ducks/filters'
import { selectAllCategories, selectAllColors, selectAllItems } from '../state/ducks/items'

import type { Items } from '../state/ducks/items'

type Props = {|
  categories: Array<string>,
  colors: Array<string>,
  items: Items,
  setCategoryFilters: (Array<string>) => void,
  setColorFilters: (Array<string>) => void,
|}

/**
 * Main application component.
 */
class Main extends React.PureComponent<Props> {
  render() {
    const {
      categories,
      colors,
      items,
      setCategoryFilters, // eslint-disable-line no-shadow
      setColorFilters, // eslint-disable-line no-shadow
    } = this.props

    return (
      <div>
        <h1 className="uk-heading-primary uk-heading-divider uk-text-center">{pkg.description}</h1>
        <ul className="uk-subnav uk-margin uk-margin-left">
          <li>
            <MultiDropdown name="Category" options={categories} onSelect={setCategoryFilters} />
          </li>
          <li>
            <MultiDropdown name="Color" options={colors} onSelect={setColorFilters} />
          </li>
        </ul>
        <hr className="uk-divider-icon" />
        <Listing className="uk-margin-left uk-margin-right" data={items} />
      </div>
    )
  }
}

export default connect(
  createSelector([selectAllCategories, selectAllColors, selectAllItems], (categories, colors, items) => ({
    categories,
    colors,
    items,
  })),
  {
    setCategoryFilters,
    setColorFilters,
  },
)(Main)
