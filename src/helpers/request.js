import axios from 'axios';

function request(path, method = 'get', body = null) {
	let bearerToken = '';
	const token = localStorage.getItem('token');
	if (token) bearerToken = `Bearer ${token}`
	return axios(`${process.env.REACT_APP_BACKEND}${path}`, {
		method: method,
		headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': bearerToken
		},
		body
	});
};

export default request;
