import { sessionsActions } from '../actions';

const {
	CREATE_SESSION_PENDING,
	CREATE_SESSION_SUCCESS,
	CREATE_SESSION_FAILED
} = sessionsActions

let INITIAL_STATE = {
	isLoading: false,
	showSessionCreateError: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_SESSION_PENDING:
			return { ...state, isLoading: true }
		case CREATE_SESSION_SUCCESS:
			return { ...state, isLoading: false, isLoggedIn: true, showSessionCreateError: false }
		case CREATE_SESSION_FAILED:
			return { ...state, showSessionCreateError: true }
		
		default:
			return state
	}
}

  
