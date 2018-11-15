// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import pkg from '../../package.json'
import MultiDropdown from '../components/multi-dropdown'
import SvgColorizer from '../components/svg-colorizer'
import GithubRibbon from '../components/github-ribbon'
import Listing from './listing'

import { selectItemsFiltered } from '../state/selectors'
import { setCategoryFilters, setColorFilters } from '../state/ducks/filters'
import { selectAllCategories, selectAllColors } from '../state/ducks/items'

import type { FullItem } from '../state/ducks/items'

type Props = {|
  categories: Array<string>,
  colors: Array<string>,
  items: Array<FullItem>,
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
        <div className="uk-container">
          <Listing data={items} />
        </div>
        <hr className="uk-divider-icon" />
        <SvgColorizer />
        <GithubRibbon />
      </div>
    )
  }
}

// $FlowFixMe: replace with connect<...>(...) as soon eslint-babel supports it
export default connect(
  state => ({
    categories: selectAllCategories(),
    colors: selectAllColors(),
    items: selectItemsFiltered(state),
  }),
  {
    setCategoryFilters,
    setColorFilters,
  },
)(Main)
