import axios from 'axios';
const BASE_URL = process.env.BASE_URL;

const _authenticatedRequest = async () => {
    const authToken = axios. ('/auth/token')
    return authToken.data.shops_id
}

const userLogin = async ({email,password}, history) => {
    const userLogin = axios.post('/auth/token', {email, password})
    await localStorage.setItem('token', userLogin.data.token);
    const token = axios. ('/auth/token')
    return token.data
}

const userSignUp = async (newShop, newUser, history) => {
    const createdUser = axios.post(`/users`, newUser)
    return createdUser.data
}

const getUser = async () => {
    const token = axios.get('/auth/token')
    return token.data
}


export default { _authenticatedRequest, userLogin, userSignUp, getUser }