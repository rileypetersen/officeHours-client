import request from '../../helpers/request';

const _authenticatedRequest = async () => {
    const authToken = request('/auth/token')
    return authToken.data.shops_id
}

const userLogin = async (body) => {
    try {
    // const [ scheme, token ] = userLogin.headers.authorization.split(' ')
    // console.log("I should be a token!?!?! ", token)
    // // let token = await request('/users/token')
    // return token.data
        const response = await request(`/users/login`, 'post', body);
        console.log('response?', response)
        const [ scheme, token ] = response.headers.auth.split(' ');
        console.log(token)
        localStorage.setItem('officeHoursToken', token);
        return response;
    }
    catch(err) {
        console.error(err)
    }
}

const userSignUp = async (newShop, newUser) => {
    const createdUser = await request('/users', 'post', newUser)
    return createdUser.data
}

const getUser = async () => {
    const token = await request(`/users/token`)
    return token.data
}


export default { _authenticatedRequest, userLogin, userSignUp, getUser }