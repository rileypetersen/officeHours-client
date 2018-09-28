import request from '../../helpers/request'


const getAll = async () => {
    const response = await request(`/users`)
    console.log(response)
    return response.data
}

const getOne = async (id) => {
    const response = await request(`/users/${id}`)
    console.log(response)
    return response.data
}

const loginUser = async (body) => {
    try {
        console.log(body)
        const response = await request(`/users/login`, 'post', body)
        console.log('response body?',response)
        // console.log('response headers?',response.headers)
        return response.data
    }
    catch(err) {
        console.error(err)
    }
}

const registerUser = async (body) => {
    const response = await request(`/users/register`, 'post', body)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
}

const getUserTags = async (id) => {
    const response = await request(`/users/${id}/tags`)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
};

const addOrRemoveTag = async (id, body) => {
    const response = await request(`/users/${id}/tags`, 'post', body)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
};

const updateUser = async (id, body) => {
    const response = await request(`/users/${id}`, 'patch', body)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
};

const deleteUser = async (id) => {
    const response = await request(`/users/${id}`, 'delete')
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
};


export default { getAll, getOne, loginUser, registerUser, getUserTags, addOrRemoveTag, updateUser, deleteUser };