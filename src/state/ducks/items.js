// @flow
import characters from '../../data/characters.json'

const LOAD_ITEMS_DATA = 'plp/items/LOAD_ITEMS_DATA'

const CATEGORIES_ENUM = { Good: 1, Neutral: 2, Evil: 3 }
const COLORS_ENUM = {
  Red: '#f22',
  Blue: '#44f',
  Green: '#1e1',
  Yellow: '#fafa00',
  Purple: '#f2f',
}

export type Category = $Keys<typeof CATEGORIES_ENUM>
export const CATEGORIES: Array<Category> = Object.keys(CATEGORIES_ENUM)
export type Color = $Keys<typeof COLORS_ENUM>
export const COLORS: Array<Color> = Object.keys(COLORS_ENUM)
export type Price = number

export const mapColor = (color: Color) => COLORS_ENUM[color]

export type BareItem = {
  +name: string,
  +image: string,
}
export type FullItem = {
  +name: string,
  +image: string,
  +svg: string,
  +category: Category,
  +colors: { [Color]: Price },
  +color?: Color,
}

export type Action = {
  +type: 'plp/items/LOAD_ITEMS_DATA',
}

const randCategory = () => CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]

const randColors = () => {
  const colors = {}
  const basePrice = 50 + Math.floor(Math.random() * 10) * 10
  let n = 3 + Math.floor(Math.random() * 3)
  while (n > 0) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    if (!colors[color]) {
      const price = basePrice + Math.floor(Math.random() * 5) * 3
      if (!Object.values(colors).includes(price)) {
        colors[color] = price
        n -= 1
      }
    }
  }
  return colors
}

const reducer = (state: Array<FullItem> = [], action: Action): Array<FullItem> => {
  switch (action.type) {
    case LOAD_ITEMS_DATA:
      return characters.map(item => ({
        ...item,
        // eslint-disable-next-line global-require, import/no-dynamic-require, $FlowFixMe
        svg: require(`../../data/svg/${item.image}.svg`),
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
 * Select all available category names..
 * @returns - Array of category names.
 */
export function selectAllCategories() {
  return CATEGORIES
}

/**
 * Select all available color names.
 * @returns - Array of color names.
 */
export function selectAllColors() {
  return COLORS
}

/**
 * Select all items from Redux store.
 * @param state - Redux state (whole).
 * @returns - Array of items.
 */
export function selectAllItems(state: { items: Array<FullItem> }): Array<FullItem> {
  return state.items
}
