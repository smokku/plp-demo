// @flow strict
/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */

import * as React from 'react'

type Props = {|
  name: string,
  options: Array<string>,
  onSelect: (Array<string>) => void,
|}

type State = {|
  selected: Array<string>,
|}

/**
 * Dropdown allowinf multiple selection.
 */
class MultiDropdown extends React.PureComponent<Props, State> {
  state = {
    selected: [],
  }

  onItemClicked(e: Event, opt: string) {
    e.preventDefault()
    this.setState(
      ({ selected }) => ({
        selected: selected.includes(opt) ? selected.filter(item => item !== opt) : selected.concat(opt),
      }),
      () => this.props.onSelect(this.state.selected), // eslint-disable-line react/destructuring-assignment
    )
  }

  render() {
    const { name, options } = this.props
    const { selected } = this.state

    return (
      <React.Fragment>
        <a>
          {name}
          {' '}
          <span uk-icon="icon: triangle-down" />
        </a>
        <div uk-dropdown="mode: click;">
          <ul className="uk-nav uk-dropdown-nav">
            {options.map(opt => (
              <li key={opt}>
                <a role="button" onClick={e => this.onItemClicked(e, opt)}>
                  {opt}
                  {' '}
                  {selected.includes(opt) ? <span uk-icon="icon: check" /> : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default MultiDropdown
