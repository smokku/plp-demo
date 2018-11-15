// @flow
/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 * Configure Redux store.
 *
 * @param initialState - Initial Redux store state.
 * @returns Redux store.
 */
export default function configureStore(initialState: any = {}) {
  const rootReducer = combineReducers(reducers)
  // $FlowFixMe
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  )
}
