import { combineReducers } from 'redux'

// import actions
import { usersActions } from '../actions'


// define initial state
let INITIAL_VALUE = []

const getAllUsers = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return action.payload
    default:
      return state
  }
}