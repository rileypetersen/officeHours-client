import { combineReducers } from 'redux'

// import actions
import { } from './actions'

// define initial state
let INITIAL_VALUE = {}

const snackList = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_ALL_SNAX:
      return action.payload
    default:
      return state
  }
}