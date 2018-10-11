import { usersActions } from '../actions'

const {
	GET_ALL_USERS_PENDING,
	GET_ALL_USERS_SUCCESS,
	GET_ALL_USERS_FAILED,
	GET_ONE_USER_PENDING,
	GET_ONE_USER_SUCCESS,
	GET_ONE_USER_FAILED,
	GET_USER_TAGS_PENDING,
	GET_USER_TAGS_SUCCESS,
	GET_USER_TAGS_FAILED,
	ADD_OR_REMOVE_USER_TAG_PENDING,
	ADD_OR_REMOVE_USER_TAG_SUCCESS,
	ADD_OR_REMOVE_USER_TAG_FAILED,
	UPDATE_USER_PENDING,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAILED,
	DELETE_USER_PENDING,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAILED
} = usersActions

let INITIAL_VALUE = {
	user: {}
}

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
	case GET_ALL_USERS_PENDING:
		return { ...state, isLoading: true }
	case GET_ALL_USERS_SUCCESS:
		return { ...state, isLoading: false }
	case GET_ALL_USERS_FAILED:
		return { ...state, isLoading: false }
	case GET_ONE_USER_PENDING:
		return { ...state, isLoading: true }
	case GET_ONE_USER_SUCCESS:
		return { ...state, isLoading: false }
	case GET_ONE_USER_FAILED:
		return { ...state, isLoading: false }
	case GET_USER_TAGS_PENDING:
		return { ...state, isLoading: true }
	case GET_USER_TAGS_SUCCESS:
		return { ...state, isLoading: false }
	case GET_USER_TAGS_FAILED:
		return { ...state, isLoading: false }
	case ADD_OR_REMOVE_USER_TAG_PENDING:
		return { ...state, isLoading: true }
	case ADD_OR_REMOVE_USER_TAG_SUCCESS:
		return { ...state, isLoading: false }
	case ADD_OR_REMOVE_USER_TAG_FAILED:
		return { ...state, isLoading: false }
	case UPDATE_USER_PENDING:
		return { ...state, isLoading: true }
	case UPDATE_USER_SUCCESS:
		return { ...state, isLoading: false }
	case UPDATE_USER_FAILED:
		return { ...state, isLoading: false }
	case DELETE_USER_PENDING:
		return { ...state, isLoading: true }
	case DELETE_USER_SUCCESS:
		return { ...state, isLoading: false }
	case DELETE_USER_FAILED:
		return { ...state, isLoading: false }

    default:
      	return state
  }
}