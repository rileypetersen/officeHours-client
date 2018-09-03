import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

// import reducers

const reducers = combineReducers({ })

export default () => createStore(reducers, applyMiddleware(logger, thunkMiddleware))