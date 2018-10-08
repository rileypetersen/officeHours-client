import { orgsModel } from '../models';

export const GET_ONE_ORG_PENDING = 'GET_ONE_ORG_PENDING';
export const GET_ONE_ORG_SUCCESS = 'GET_ONE_ORG_SUCCESS';
export const GET_ONE_ORG_FAILED = 'GET_ONE_ORG_FAILED';
export const GET_ALL_ORG_USERS_PENDING = 'GET_ALL_ORG_USERS_PENDING';
export const GET_ALL_ORG_USERS_SUCCESS = 'GET_ALL_ORG_USERS_SUCCESS';
export const GET_ALL_ORG_USERS_FAILED = 'GET_ALL_ORG_USERS_FAILED';
export const GET_ONE_ORG_USER_PENDING = 'GET_ONE_ORG_USER_PENDING';
export const GET_ONE_ORG_USER_SUCCESS = 'GET_ONE_ORG_USER_SUCCESS';
export const GET_ONE_ORG_USER_FAILED = 'GET_ONE_ORG_USER_FAILED';
export const ADD_ORG_USER_PENDING = 'ADD_ORG_USER_PENDING';
export const ADD_ORG_USER_SUCCESS = 'ADD_ORG_USER_SUCCESS';
export const ADD_ORG_USER_FAILED = 'ADD_ORG_USER_FAILED';
export const REMOVE_ORG_USER_PENDING = 'REMOVE_ORG_USER_PENDING';
export const REMOVE_ORG_USER_SUCCESS = 'REMOVE_ORG_USER_SUCCESS';
export const REMOVE_ORG_USER_FAILED = 'REMOVE_ORG_USER_FAILED';
export const UPDATE_ORG_USER_PENDING = 'UPDATE_ORG_USER_PENDING';
export const UPDATE_ORG_USER_SUCCESS = 'UPDATE_ORG_USER_SUCCESS';
export const UPDATE_ORG_USER_FAILED = 'UPDATE_ORG_USER_FAILED';
export const DELETE_ORG_USER_PENDING = 'DELETE_ORG_USER_PENDING';
export const DELETE_ORG_USER_SUCCESS = 'DELETE_ORG_USER_SUCCESS';
export const DELETE_ORG_USER_FAILED = 'DELETE_ORG_USER_FAILED';
export const GET_ALL_ORGS_PENDING = 'GET_ALL_ORGS_PENDINGPENDING';
export const GET_ALL_ORGS_SUCCESS = 'GET_ALL_ORGS_SUCCESS';
export const GET_ALL_ORGS_FAILED = 'GET_ALL_ORGS_FAILED';


export const getOneOrg = (id) => {
	return async dispatch => {
		try {
			dispatch({ type: GET_ONE_ORG_PENDING })
			const payload = await orgsModel.getOneOrg(id);
			dispatch({ type: GET_ONE_ORG_SUCCESS, payload });
		} catch (err) {
			dispatch({ type: GET_ONE_ORG_FAILED })
		}
	};
};

export const getAllOrgUsers = () => {
	return async dispatch => {
		try {
			dispatch({ type: GET_ALL_ORG_USERS_PENDING })
			const payload = await orgsModel.getAllOrgUsers();
			dispatch({ type: GET_ALL_ORG_USERS_SUCCESS, payload });
		} catch (err) {
			dispatch({ type: GET_ALL_ORG_USERS_FAILED })
		}
	};
};

export const getOneOrgUser = (id) => {
	return async dispatch => {
		try {
			dispatch({ type: GET_ONE_ORG_USER_PENDING })
			const payload = await orgsModel.getOneOrgUser(id);
			dispatch({ type: GET_ONE_ORG_USER_SUCCESS, payload });
		} catch (err) {
			dispatch({ type: GET_ONE_ORG_USER_FAILED })
		}
	};
};

export const addOrgUser = (id, body) => {
	return async dispatch => {
		try {
			dispatch({ type: ADD_ORG_USER_PENDING })
			const payload = await orgsModel.addOrgUser(id, body);
			dispatch({ type: ADD_ORG_USER_SUCCESS, payload })
		} catch (err) {
			dispatch({ type: ADD_ORG_USER_FAILED })
		}
	};
};

export const removeOrgUser = (id, body) => {
	return async dispatch => {
		try {
			dispatch({ type: REMOVE_ORG_USER_PENDING })
			const payload = await orgsModel.removeOrgUser(id, body);
			dispatch({ type: REMOVE_ORG_USER_SUCCESS, payload })
		} catch (err) {
			dispatch({ type: REMOVE_ORG_USER_FAILED })
		}
	};
};

export const updateOrgUser = (id, body) => {
	return async dispatch => {
		try {
			dispatch({ type: UPDATE_ORG_USER_PENDING })
			const payload = await orgsModel.updateOrgUser(id, body);
			dispatch({ type: UPDATE_ORG_USER_SUCCESS, payload })
		} catch (err) {
			dispatch({ type: UPDATE_ORG_USER_FAILED })
		}
	};
};

export const deleteOrgUser = (id) => {
	return async dispatch => {
		try {
			dispatch({ type: DELETE_ORG_USER_PENDING })
			const payload = await orgsModel.deleteOrgUser(id);
			dispatch({ type: DELETE_ORG_USER_SUCCESS, payload })
		} catch (err) {
			dispatch({ type: DELETE_ORG_USER_FAILED })
		}
	}
};

export const getAllOrgs = () => {
	return async dispatch => {
		try {
			dispatch({ type: GET_ALL_ORGS_PENDING })
			const payload = await orgsModel.getAllOrgs()
			dispatch({ type: GET_ALL_ORGS_SUCCESS, payload })
		} catch (err) {
			dispatch({ type: GET_ALL_ORGS_FAILED, payload: err.response.data.message })
		}
	};
};
