import { usersActions } from '../actions'

const {
  	GET_ALL_USERS
} = usersActions

let INITIAL_VALUE = {}

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      	return action.payload
    default:
      	return state
  }
}