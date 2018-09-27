import request from '../../helpers/request';

const _authenticatedRequest = async () => {
    const authToken = request('/auth/token')
    return authToken.data.shops_id
}

const userLogin = async ({ user_name,password }, history) => {
    const userLogin = await request('/users/login', 'post', { user_name, password })
    const [ scheme, token ] = userLogin.headers.authorization.split(' ')
    console.log("I should be a token!?!?! ", token)
    // await localStorage.setItem('token', userLogin.data.token);
    // // const token = await request('/users/token')
    // return token.data
}

const userSignUp = async (newShop, newUser, history) => {
    const createdUser = await request('/users', 'post', newUser)
    return createdUser.data
}

const getUser = async () => {
    const token = await request(`/users/token`)
    return token.data
}


export default { _authenticatedRequest, userLogin, userSignUp, getUser }