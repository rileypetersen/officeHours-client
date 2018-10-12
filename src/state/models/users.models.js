import request from '../../helpers/request'


const getAllUsers = async () => {
    const response = await request(`/users`)
    return response.data
}

const getOneUser = async (id) => {
    const response = await request(`/users/${id}`)
    return response.data
}

const getUserTags = async (id) => {
    const response = await request(`/users/${id}/tags`)
    return response.data
};

const addOrRemoveUserTag = async (id, body) => {
    const response = await request(`/users/${id}/tags`, 'post', body)
    return response.data
};

const updateUser = async (id, body) => {
    const response = await request(`/users/${id}`, 'patch', body)
    return response.data
};

const deleteUser = async (id) => {
    const response = await request(`/users/${id}`, 'delete')
    return response.data
};


export default { getAllUsers, getOneUser, getUserTags, addOrRemoveUserTag, updateUser, deleteUser };