import { usersModel } from '../models';
export const GET_ALL_USERS_PENDING = 'GET_ALL_USERS_PENDING';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILED = 'GET_ALL_USERS_FAILED';
export const GET_ONE_USER_PENDING = 'GET_ONE_USER_PENDING';
export const GET_ONE_USER_SUCCESS = 'GET_ONE_USER_SUCCESS';
export const GET_ONE_USER_FAILED = 'GET_ONE_USER_FAILED';
export const GET_USER_TAGS_PENDING = 'GET_USER_TAGS_PENDING';
export const GET_USER_TAGS_SUCCESS = 'GET_USER_TAGS_SUCCESS';
export const GET_USER_TAGS_FAILED = 'GET_USER_TAGS_FAILED';
export const ADD_OR_REMOVE_USER_TAG_PENDING = 'ADD_OR_REMOVE_USER_TAG_PENDING';
export const ADD_OR_REMOVE_USER_TAG_SUCCESS = 'ADD_OR_REMOVE_USER_TAG_SUCCESS';
export const ADD_OR_REMOVE_USER_TAG_FAILED = 'ADD_OR_REMOVE_USER_TAG_FAILED';
export const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';
export const DELETE_USER_PENDING = 'DELETE_USER_PENDING';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

export const getAllUsers = () => {
	return async dispatch => {
        try {
            dispatch({ type: GET_ALL_USERS_PENDING });
            const payload = await usersModel.getAll();
            dispatch({ type: GET_ALL_USERS_SUCCESS, payload });
        } catch (err) {
            dispatch({ type: GET_ALL_USERS_FAILED });
        }
	};
};

export const getOneUser = (id) => {
	return async dispatch => {
        try {
            dispatch({ type: GET_ONE_USER_PENDING });
            const payload = await usersModel.getOne(id);
            dispatch({ type: GET_ONE_USER_SUCCESS, payload });;
        } catch (err) {
            dispatch({ type: GET_ONE_USER_FAILED });
        }
	};
};

export const getOneUserTags = (id) => {
	return async dispatch => {
        try {
            dispatch({ type: GET_USER_TAGS_PENDING });
            const payload = await usersModel.getUserTags(id);
            dispatch({ type: GET_USER_TAGS_SUCCESS, payload });;
        } catch (err) {
            dispatch({ type: GET_USER_TAGS_FAILED });
        }
	};
};

export const addOrRemoveTag = (id, body) => {
	return async dispatch => {
        try {
            dispatch({ type: ADD_OR_REMOVE_USER_TAG_PENDING });
            const payload = await usersModel.addOrRemoveUserTag(id, body);
            dispatch({ type: ADD_OR_REMOVE_USER_TAG_SUCCESS, payload });
        } catch (err) {
            dispatch({ type: ADD_OR_REMOVE_USER_TAG_FAILED });
        }
	};
};

export const updateUser = (id, body) => {
	return async dispatch => {
        try {
            dispatch({ type: UPDATE_USER_PENDING });
            const payload = await usersModel.updateUser(id, body);
            dispatch({ type: UPDATE_USER_SUCCESS, payload });
        } catch (err) {
            dispatch({ type: UPDATE_USER_FAILED });
        }
	};
};

export const deleteUser = (id) => {
	return async dispatch => {
        try {
            dispatch({ type: DELETE_USER_PENDING });
            const payload = await usersModel.deleteUser(id);
            dispatch({ type: DELETE_USER_SUCCESS, payload });
        } catch (err) {
            dispatch({ type: DELETE_USER_FAILED });
        }
	}
};