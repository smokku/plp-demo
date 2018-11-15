// @flow
import { combineReducers } from 'redux'
import type { Reducer } from 'redux'

const types = {
  SET_CATEGORY_FILTERS: 'plp/filters/SET_CATEGORY_FILTERS',
  SET_COLOR_FILTERS: 'plp/filters/SET_COLOR_FILTERS',
}

type Filter = $Values<typeof types>

export type Filters = Array<Filter>

export type Action = {
  +type: $Values<typeof types>,
  +filters: Filters,
}

/**
 * Build reducer for specific Filter.
 *
 * @param type - Filter type.
 * @returns Reducer for Filter.
 */
function filtersReducer(type: Filter): Reducer<Filters, Action> {
  return (state = [], action) => (type === action.type ? action.filters : state)
}

// $FlowFixMe: replace with combineReducers<Object, Action> as soon eslint-babel supports it
const reducer = combineReducers({
  categories: filtersReducer(types.SET_CATEGORY_FILTERS),
  colors: filtersReducer(types.SET_COLOR_FILTERS),
})

export default reducer

/**
 * SET_CATEGORY_FILTERS action creator.
 * @param filters - Filters to set.
 * @returns Redux action.
 */
export function setCategoryFilters(filters: Filters): Action {
  return {
    type: types.SET_CATEGORY_FILTERS,
    filters,
  }
}

/**
 * SET_COLOR_FILTERS action creator.
 * @param filters - Filters to set.
 * @returns Redux action.
 */
export function setColorFilters(filters: Filters): Action {
  return {
    type: types.SET_COLOR_FILTERS,
    filters,
  }
}

/**
 * Select active category filters.
 * @param state - Full Redux state.
 * @returns - Array of categories.
 */
export function selectCategoryFilters(state: { filters: { categories: Filters } }) {
  return state.filters.categories
}

/**
 * Select active color filters.
 * @param state - Full Redux state.
 * @returns - Array of colors.
 */
export function selectColorFilters(state: { filters: { colors: Filters } }) {
  return state.filters.colors
}
