// @flow
import characters from '../../data/characters.json'

const LOAD_ITEMS_DATA = 'plp/items/LOAD_ITEMS_DATA'

export type Item = {
  +name: string,
  +image: string,
  +category?: string,
  +colors?: Array<{ [string]: number }>,
}
export type Items = Array<Item>

export type Action = {
  +type: 'plp/items/LOAD_ITEMS_DATA',
}

const CATEGORIES = ['Good', 'Neutral', 'Evil'] // FIXME: fetch from store
const COLORS = ['Red', 'Blue', 'Green', 'Gray', 'Yellow', 'Pink', 'Purple', 'Orange'] // FIXME: fetch from store

const randCategory = () => CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]

const randColors = () => {
  const colors = {}
  const basePrice = 50 + Math.floor(Math.random() * 10) * 10
  let n = 3 + Math.floor(Math.random() * 3)
  while (n > 0) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    if (!colors[color]) {
      colors[color] = basePrice + Math.floor(Math.random() * 5) * 5
      n -= 1
    }
  }
  return colors
}

const reducer = (state: Items = [], action: Action): Items => {
  switch (action.type) {
    case LOAD_ITEMS_DATA:
      return characters.map(item => ({
        ...item,
        category: randCategory(),
        colors: randColors(),
      }))
    default:
      return state
  }
}

export default reducer

/**
 * LOAD_ITEMS_DATA action creator.
 * @returns Redux action.
 */
export function loadItemsData(): Action {
  return {
    type: LOAD_ITEMS_DATA,
  }
}

/**
 * Select all items from Redux store.
 * @param state - Redux state (whole).
 * @returns Array of items.
 */
export function selectAllItems(state: { items: Items }): Items {
  return state.items
}
