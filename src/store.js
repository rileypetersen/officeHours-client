import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './state/reducers'

export default () => createStore(rootReducer, applyMiddleware(thunk, logger))