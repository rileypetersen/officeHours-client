import { authActions } from '../actions';

const {
	USER_LOGIN_PENDING,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
	USER_REGISTER_PENDING,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILED,
	USER_LOGOUT
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
    case USER_REGISTER_PENDING:   
        return { ...state, isLoading: true }
    case USER_REGISTER_SUCCESS: 
      	return { ...state, isLoading: false, showLoginError: false, showRegisterSuccess: true }
    case USER_REGISTER_FAILED: 
		return { ...state, isLoading: false, showLoginError: true, showRegisterSuccess: false }
    case USER_LOGOUT:
        return { ...state, isLoading: false, isLoggedIn: false, user: {} }

    default:
      	return state
  }
}

  
