import { authActions } from '../actions';

const {
	USER_LOGIN_PENDING,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
	USER_LOGOUT_PENDING,
	USER_LOGOUT_SUCCESS,
	USER_LOGOUT_FAILED,
	USER_REGISTER_PENDING,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILED,
	GET_USER_VIA_TOKEN
} = authActions

let INITIAL_STATE = {
	isLoading: false,
	isLoggedIn: false,
	showLoginError: false,
	showRegisterError: false,
	user: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      	return { ...state, isLoading: true }
    case USER_LOGIN_SUCCESS:
      	return { ...state, isLoading: false, isLoggedIn: true, showLoginError: false, user: action.payload }
    case USER_LOGIN_FAILED:
		return { ...state, showLoginError: true }
	case USER_LOGOUT_PENDING:
		return { ...state, isLoading: true }
	case USER_LOGOUT_SUCCESS:
		return { isLoading: false, isLoggedIn: false, showLoginError: false, showRegisterError: false, user: {} }
	case USER_LOGOUT_FAILED:
		return { ...state, isLoading: false }
    case USER_REGISTER_PENDING:   
        return { ...state, isLoading: true }
    case USER_REGISTER_SUCCESS: 
      	return { ...state, showRegisterError: false, showRegisterSuccess: true }
    case USER_REGISTER_FAILED: 
		return { ...state, showRegisterError: true, showRegisterSuccess: false, registerErrorMessage: action.payload }
	case GET_USER_VIA_TOKEN:
		return { ...state, }

    default:
      	return state
  }
}

  
