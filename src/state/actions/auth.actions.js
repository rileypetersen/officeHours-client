import { authModel } from '../models'
export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_REGISTER_PENDING = 'USER_REGISTER_PENDING';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';
export const GET_USER_VIA_TOKEN = 'GET_USER_VIA_TOKEN';
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';
export const USER_LOGOUT_PENDING = 'USER_LOGOUT_PENDING';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED';

export const userLogin = (body, history) => {
	return async (dispatch) => {
		try {
			dispatch({ type: USER_LOGIN_PENDING });
			const response = await authModel.userLogin(body, history);
			dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
		} catch (err) {
			dispatch({ type: USER_LOGIN_FAILED, payload: err.response.data.message });
		}
	};
};

export const userLogout = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: USER_LOGOUT_PENDING })
			const payload = await authModel.userLogout();
			dispatch({ type: USER_LOGOUT_SUCCESS, payload })
		} catch (err) {
			dispatch({ type: USER_LOGOUT_FAILED })
		}
	}
};

export const userRegister = (newUser, history) => {
	return async (dispatch) => {
		try {
			dispatch({ type: USER_REGISTER_PENDING });
			const payload = await authModel.userRegister(newUser, history);
			dispatch({ type: USER_REGISTER_SUCCESS, payload });
		} catch (err) {
			dispatch({ type: USER_REGISTER_FAILED, payload: err.response.data.message });
		}
	};
};

export const _authenticatedRequest = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: USER_LOGIN_PENDING });
			const token = await authModel._authenticatedRequest(); 
			dispatch({ type: GET_USER_VIA_TOKEN, payload: token });
		}
		catch (err) {
			dispatch({ type: NOT_LOGGED_IN, payload: err });
		}
	};
};