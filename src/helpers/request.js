import axios from 'axios';

function request(path, method = 'get', body = null) {
	let bearerToken = '';
	const token = localStorage.getItem('token');
	if (token) bearerToken = `Bearer ${token}`
	return axios(`${process.env.BASE_URL}${path}`, {
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
