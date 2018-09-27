import request from '../../helpers/request'


const getAll = async () => {
    const response = request(`/users`)
    console.log(response)
    return response.data
}

const getOne = async (id) => {
    const response = request(`/users/${id}`)
    console.log(response)
    return response.data
}

const loginUser = async (body) => {
    const response = request(`/users/login`, 'post', body)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
}

const registerUser = async (body) => {
    const response = request(`/users/register`, 'post', body)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
}

const getUserTags = async (id) => {
    const response = request(`/users/${id}/tags`)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
};

const addOrRemoveTag = async (id, body) => {
    const response = request(`/users/${id}/tags`, 'post', body)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
};

const updateUser = async (id, body) => {
    const response = request(`/users/${id}`, 'patch', body)
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
};

const deleteUser = async (id) => {
    const response = request(`/users/${id}`, 'delete')
    console.log('response body?',response.data)
    console.log('response headers?',response.headers)
    return response.data
};


export default { getAll, getOne, loginUser, registerUser, getUserTags, addOrRemoveTag, updateUser, deleteUser };