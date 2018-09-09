// @flow
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect'
import { selectAllItems } from './ducks/items'
import { selectCategoryFilters } from './ducks/filters'

export const selectItemsFiltered = createSelector([selectCategoryFilters, selectAllItems], (categories, items) => items.filter(item => categories.length === 0 || categories.includes(item.category)))
