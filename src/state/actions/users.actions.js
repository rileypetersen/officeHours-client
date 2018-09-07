import { usersModel } from '../models';

export const GET_ALL_USERS = 'GET_ALL_USERS';

export const getAllUsers = () => {
	return async dispatch => {
		const payload = await usersModel.getAll()
		dispatch({ type: GET_ALL_USERS, payload });
	};
};