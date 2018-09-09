// @flow
import { combineReducers } from 'redux'

const types = {
  SET_CATEGORY_FILTERS: 'plp/filters/SET_CATEGORY_FILTERS',
  SET_COLOR_FILTERS: 'plp/filters/SET_COLOR_FILTERS',
}

export type Filters = Array<string>

export type Action = {
  +type: $Values<typeof types>,
  +filters: Array<string>,
}

const filtersReducer = type => (state: Filters = [], action: Action): Filters => (type === action.type ? action.filters : state)

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
