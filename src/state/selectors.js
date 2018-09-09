// @flow
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect'
import { selectAllItems } from './ducks/items'
import { selectCategoryFilters, selectColorFilters } from './ducks/filters'

export const selectItemsFiltered = createSelector(
  [selectCategoryFilters, selectColorFilters, selectAllItems],
  (categoriesFilter, colorsFilter, allItems) => {
    const items = []
    allItems
      .filter(item => categoriesFilter.length === 0 || categoriesFilter.includes(item.category))
      .forEach(({ colors, ...item }) => {
        Object.entries(colors).forEach(([color, price]) => {
          if (colorsFilter.length === 0 || colorsFilter.includes(color)) {
            items.push({
              ...item,
              color,
              price,
            })
          }
        })
      })
    return items
  },
)
