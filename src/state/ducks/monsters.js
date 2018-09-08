// @flow
import { species } from 'fantastical'
import monstersArray from '../../data/monsters.json'

const LOAD_MONSTERS_DATA = 'plp/monsters/LOAD_MONSTERS_DATA'

export type Monsters = {}

export type Action = {
  +type: 'plp/monsters/LOAD_MONSTERS_DATA',
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

const reducer = (state: Monsters = {}, action: Action): Monsters => {
  switch (action.type) {
    case LOAD_MONSTERS_DATA:
      return monstersArray.map(image => ({
        name: species.dragon(),
        image,
        category: randCategory(),
        colors: randColors(),
      }))
    default:
      return state
  }
}

export default reducer

/**
 * LOAD_MONSTERS_DATA action creator.
 * @returns Redux action.
 */
export function loadMonstersData(): Action {
  return {
    type: LOAD_MONSTERS_DATA,
  }
}
