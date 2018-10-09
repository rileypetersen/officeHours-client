import { orgsActions } from '../actions';

const {
    GET_ONE_ORG_PENDING,
    GET_ONE_ORG_SUCCESS,
    GET_ONE_ORG_FAILED,
    GET_ALL_ORG_USERS_PENDING,
    GET_ALL_ORG_USERS_SUCCESS,
    GET_ALL_ORG_USERS_FAILED,
    GET_ONE_ORG_USER_PENDING,
    GET_ONE_ORG_USER_SUCCESS,
    ADD_ORG_USER_PENDING,
    ADD_ORG_USER_SUCCESS,
    ADD_ORG_FAILED,
    REMOVE_ORG_USER_PENDING,
    REMOVE_ORG_USER_SUCCESS,
    REMOVE_ORG_FAILED,
    UPDATE_ORG_USER_PENDING,
    UPDATE_ORG_USER_SUCCESS,
    UPDATE_ORG_FAILED,
    DELETE_ORG_USER_PENDING,
    DELETE_ORG_USER_SUCCESS,
    DELETE_ORG_FAILED,
    GET_ALL_ORGS_PENDING,
    GET_ALL_ORGS_SUCCESS,
    GET_ALL_ORGS_FAILED
} = orgsActions

let INITIAL_STATE = {
	isLoading: false,
    showGetAllOrgUsersError: false,
    showGetOneOrgUserError: false,
    showAddOrgUserError: false,
    showRemoveOrgUserError: false,
    showDeleteOrgUserError: false,
    showUpdateOrgUserError: false,
    showGetAllOrgsError: false,
    orgs: [],
    currentOrg: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ONE_ORG_PENDING:
        return { ...state, isLoading: false, }
    case GET_ONE_ORG_SUCCESS:
        return { ...state, isLoading: false, currentOrg: action.payload }
    case GET_ONE_ORG_FAILED:
        return { ...state, isLoading: false }
    case GET_ALL_ORGS_PENDING:
      	return { ...state, isLoading: true }
    case GET_ALL_ORGS_SUCCESS:
      	return { ...state, isLoading: false, orgs: action.payload }
    case GET_ALL_ORGS_FAILED:
		return { ...state, isLoading: false }
    case GET_ALL_ORG_USERS_PENDING:
        return { ...state, isLoading: true }
    case GET_ALL_ORG_USERS_SUCCESS:
        return { ...state, isLoading: false }
    case GET_ALL_ORG_USERS_FAILED:
        return { ...state, isLoading: false}
    case GET_ALL_ORGS_FAILED:
        return { ...state, isLoading: false }
    case GET_ONE_ORG_USER_PENDING:
        return { ...state, isLoading: true }
    case GET_ONE_ORG_USER_SUCCESS:
        return { ...state, isLoading: false }
    case GET_ONE_ORG_FAILED:
        return { ...state, isLoading: false }
    case ADD_ORG_USER_PENDING:
        return { ...state, isLoading: true }
    case ADD_ORG_USER_SUCCESS:
        return { ...state, isLoading: false }
    case ADD_ORG_FAILED:
        return { ...state, isLoading: false }
    case REMOVE_ORG_USER_PENDING:
        return { ...state, isLoading: true }
    case REMOVE_ORG_USER_SUCCESS:
        return { ...state, isLoading: false }
    case REMOVE_ORG_FAILED:
        return { ...state, isLoading: false }
    case UPDATE_ORG_USER_PENDING:
        return { ...state, isLoading: true }
    case UPDATE_ORG_USER_SUCCESS:
        return { ...state, isLoading: false }
    case UPDATE_ORG_FAILED:
        return { ...state, isLoading: false }
    case DELETE_ORG_USER_PENDING:
        return { ...state, isLoading: true }
    case DELETE_ORG_USER_SUCCESS:
        return { ...state, isLoading: false }
    case DELETE_ORG_FAILED:
        return { ...state, isLoading: false }

    default:
      	return state
  }
}
