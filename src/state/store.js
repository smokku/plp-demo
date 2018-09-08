// @flow
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './ducks'

/**
 * Configure Redux store.
 *
 * @param initialState - Initial Redux store state.
 * @returns Redux store.
 */
export default function configureStore(initialState: any = {}) {
  const rootReducer = combineReducers(reducers)
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(),
  )
}
