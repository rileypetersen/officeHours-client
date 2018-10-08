import request from '../../helpers/request';

const _authenticatedRequest = async () => {
    const authToken = request('/auth/token');
    return authToken.data;
};

const userLogin = async (body) => {
    const auth = await request(`/users/login`, 'post', body);

    console.log('dis!',auth.data)
    const [ scheme, token ] = auth.headers.auth.split(' ');
    localStorage.setItem('officeHoursToken', token);
    const response = await request(`/users/${auth.data}`);
    return response;
};

const userRegister = async (newUser) => {;
    delete newUser.password2;
    const createdUser = await request('/users/register', 'post', newUser);
    return createdUser.data;
};

const getUserViaToken = async () => {
    const token = await request(`/users/token`);
    return token.data;
};


export { _authenticatedRequest, userLogin, userRegister, getUserViaToken };
