import { usersModel } from '../models';

// export const GET_ALL_USERS = 'GET_ALL_USERS';

// export const getAllUsers = () => {
// 	return async dispatch => {
// 		const payload = await usersModel.getAll();
// 		dispatch({ type: GET_ALL_USERS, payload });
// 	};
// };

// export const getOneUser = (id) => {
// 	return async dispatch => {
// 		const payload = await usersModel.getOne(id);
// 		dispatch({ type: GET_ONE_USER, payload });
// 	};
// };

// export const loginUser = (body) => {
// 	return async dispatch => {
// 		console.log('im in actions!?', body)

// 		const payload = await usersModel.default.loginUser(body);
// 		dispatch({ type: LOGIN_USER, payload });
// 	};
// };

// export const registerUser = (body) => {
// 	return async dispatch => {
// 		const payload = await usersModel.registerUser(body);
// 		dispatch({ type: REGISTER_USER, payload });
// 	};
// };

// export const getOneUserTags = (id) => {
// 	return async dispatch => {
// 		const payload = await usersModel.getUserTags(id);
// 		dispatch({ type: GET_ONE_USER_TAGS, payload });
// 	};
// };

// export const addOrRemoveTag = (id, body) => {
// 	return async dispatch => {
// 		const payload = await usersModel.addOrRemoveTag(id, body);
// 		dispatch({ type: ADD_REMOVE_USER_TAG, payload })
// 	};
// };

// export const updateUser = (id, body) => {
// 	return async dispatch => {
// 		const payload = await usersModel.updateUser(id, body);
// 		dispatch({ type: UPDATE_USER, payload })
// 	};
// };

// export const deleteUser = (id) => {
// 	return async dispatch => {
// 		const payload = await usersModel.deleteUser(id);
// 		dispatch({ type: DELETE_USER, payload })
// 	}
// };