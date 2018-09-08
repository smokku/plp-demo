// @flow

import * as React from 'react'
import { connect } from 'react-redux'

import pkg from '../../package.json'
import MultiDropdown from '../components/multi-dropdown'

import { setCategoryFilters, setColorFilters } from '../state/ducks/filters'

const CATEGORIES = ['Good', 'Neutral', 'Evil'] // FIXME: fetch from store
const COLORS = ['Red', 'Blue', 'Green', 'Black'] // FIXME: fetch from store

type Props = {|
  setCategoryFilters: (Array<string>) => void,
  setColorFilters: (Array<string>) => void,
|}

/**
 * Main application component.
 */
class Main extends React.PureComponent<Props> {
  render() {
    const { setCategoryFilters, setColorFilters } = this.props // eslint-disable-line no-shadow

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
      </div>
    )
  }
}

export default connect(
  undefined,
  {
    setCategoryFilters,
    setColorFilters,
  },
)(Main)
