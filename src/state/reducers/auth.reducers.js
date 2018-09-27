import { 
    USER_LOGIN_PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_PENDING,
    USER_LOGIN_FAILED,
    USER_LOGIN_PENDING,
    USER_REGISTER_PENDING,
    USER_LOGIN_PENDING,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_PENDING,
    USER_REGISTER_FAILED,
    USER_LOGIN_PENDING,
    GET_USERUSER_LOGIN_PENDING,
    NOT_LOGGED_INUSER_LOGIN_PENDING,
    USER_LOGOUTUSER_LOGIN_PENDING 
} from '../actions/auth.actions';



let INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: false,
  showLoginError: false,
  showSignupError: false,
  user: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return { ...state, isLoading: true }
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true, showLoginError: false, user: action.payload.data }
    case USER_LOGIN_FAILED:
      return { ...state, isLoading: false, isLoggedIn: false, showLoginError: true, user: {} }
    case USER_REGISTER_PENDING:   
        return { ...state, }
    case USER_REGISTER_SUCCESS: 
      return { ...state, }  
    case USER_REGISTER_FAILED: 
      return { ...state, isLoading: false, showSignupError: true }
    case USER_LOGOUT:
      return { ...state, isLoading: false, isLoggedIn: false, user: {} }
    //   return { ...state, }
    // case GET_USERUSER_LOGIN_PENDING: 
    //   return { ...state, }
    // case NOT_LOGGED_IN
    case USER_LOGIN_PENDING: 
    //   return { ...state, }
    // case USER_LOGOUT
    case USER_LOGIN_PENDING:  
    //   return { ...state, }
    default:
      return state
  }
}

  
