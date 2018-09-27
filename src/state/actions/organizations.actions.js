import { organizationsModel } from '../models';

export const GET_ALL_ORG_USERS = 'GET_ALL_ORG_USERS';
export const GET_ONE_ORG_USER = 'GET_ONE_ORG_USER';
export const ADD_ORG_USER = 'ADD_ORG_USER';
export const REMOVE_ORG_USER = 'REMOVE_ORG_USER';
export const UPDATE_ORG_USER = 'UPDATE_ORG_USER';
export const DELETE_ORG_USER = 'DELETE_ORG_USER';

export const getAllOrgUsers = () => {
	return async dispatch => {
		const payload = await organizationsModel.getAllOrgUsers();
		dispatch({ type: GET_ALL_ORG_USERS, payload });
	};
};

export const getOneOrgUser = (id) => {
	return async dispatch => {
		const payload = await organizationsModel.getOneOrgUser(id);
		dispatch({ type: GET_ONE_ORG_USER, payload });
	};
};

export const addOrgUser = (id, body) => {
	return async dispatch => {
		const payload = await organizationsModel.addOrgUser(id, body);
		dispatch({ type: ADD_ORG_USER, payload })
	};
};

export const removeOrgUser = (id, body) => {
	return async dispatch => {
		const payload = await organizationsModel.removeOrgUser(id, body);
		dispatch({ type: REMOVE_ORG_USER, payload })
	};
};

export const updateOrgUser = (id, body) => {
	return async dispatch => {
		const payload = await organizationsModel.updateOrgUser(id, body);
		dispatch({ type: UPDATE_ORG_USER, payload })
	};
};

export const deleteOrgUser = (id) => {
	return async dispatch => {
		const payload = await organizationsModel.deleteOrgUser(id);
		dispatch({ type: DELETE_ORG_USER, payload })
	}
};