import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk' // for asynchronous actions

import reducer from '@/reducers/players'

// allows to get redux dev tools for easier debugging
const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

export default createStore(reducer, /* preloadedState, */ enhancer)
