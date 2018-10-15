import axios from 'axios';

function request(path, method = 'get', body = null) {
	let bearerToken = '';
	const token = localStorage.getItem('officeHoursToken');
	if (token) bearerToken = `Bearer ${token}`;
	return axios({
		method: method,
		url: `http://localhost:8080/api${path}`,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': bearerToken
		},
		data: body
	});
};

export default request;
