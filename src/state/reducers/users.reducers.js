import { usersActions } from '../actions'

const {
	  GET_ALL_USERS,
	  GET_ONE_USER
} = usersActions

let INITIAL_VALUE = {
	currentUser: {}
}

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
		return action.payload
	case GET_ONE_USER:
      	return action.payload
    default:
      	return state
  }
}