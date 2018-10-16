import { sessionsModel } from '../models'
export const CREATE_SESSION_PENDING = 'CREATE_SESSION_PENDING';
export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_FAILED = 'CREATE_SESSION_FAILED';

export const createSession = (body, history) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CREATE_SESSION_PENDING });
			const response = await sessionsModel.createSession(body, history);
			dispatch({ type: CREATE_SESSION_SUCCESS, payload: response.data });
		} catch (err) {
			dispatch({ type: CREATE_SESSION_FAILED, payload: err.response.data.message });
		}
	};
};