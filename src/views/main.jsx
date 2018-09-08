// @flow

import * as React from 'react'
import { autobind } from 'react-decoration'

import MultiDropdown from '../components/multi-dropdown'

import pkg from '../../package.json'

const CATEGORIES = ['Good', 'Neutral', 'Evil']
const COLORS = ['Red', 'Blue', 'Green', 'Black']

type Props = {||}

/**
 * Main application component.
 */
class Main extends React.PureComponent<Props> {
  @autobind
  categorySelected(categories: Array<string>) {
    console.debug(categories)
  }

  @autobind
  colorSelected(colors: Array<string>) {
    console.debug(colors)
  }

  render() {
    return (
      <div>
        <h1 className="uk-heading-primary uk-heading-divider uk-text-center">{pkg.description}</h1>
        <ul className="uk-subnav uk-margin-left">
          <li>
            <MultiDropdown name="Category" options={CATEGORIES} onSelect={this.categorySelected} />
          </li>
          <li>
            <MultiDropdown name="Color" options={COLORS} onSelect={this.colorSelected} />
          </li>
        </ul>
      </div>
    )
  }
}

export default Main
