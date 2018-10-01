import request from '../../helpers/request';

const _authenticatedRequest = async () => {
    const authToken = request('/auth/token')
    return authToken.data
}

const userLogin = async (body) => {
    try {
    // const [ scheme, token ] = userLogin.headers.authorization.split(' ')
    // console.log("I should be a token!?!?! ", token)
    // // let token = await request('/users/token')
    // return token.data
        const response = await request(`/users/login`, 'post', body);
        const [ scheme, token ] = response.headers.auth.split(' ');
        localStorage.setItem('officeHoursToken', token);
        return response;
    } catch(error) {
        console.error(error)
    }
}

const userRegister = async (newUser) => {
    // try {
        delete newUser.password2
        const createdUser = await request('/users/register', 'post', newUser)
        
        console.log('fire reg?!!!!!!!!!!!!! ', createdUser)
        // return createdUser.data
    // } catch (error) {
        // console.error('I fucked up? ',error)
    // }
}

const getUser = async () => {
    const token = await request(`/users/token`)
    return token.data
}


export default { _authenticatedRequest, userLogin, userRegister, getUser }