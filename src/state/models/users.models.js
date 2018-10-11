import request from '../../helpers/request'


const getAll = async () => {
    try {
        const response = await request(`/users`)
        console.log(response)
        return response.data
    } catch (err) {
        console.error(err)
    }
}

const getOne = async (id) => {
    try {
        const response = await request(`/users/${id}`)
        return response.data
    } catch (err) {
        console.error(err)
    }
}

const getUserTags = async (id) => {
    try {
        const response = await request(`/users/${id}/tags`)
        return response.data
    } catch (err) {
        console.error(err)
    }
};

const addOrRemoveTag = async (id, body) => {
    try {
        const response = await request(`/users/${id}/tags`, 'post', body)
        return response.data
    } catch (err) {
        console.error(err)
    }
};

const updateUser = async (id, body) => {
    try {
        const response = await request(`/users/${id}`, 'patch', body)
        return response.data
    } catch (err) {
        console.error(err)
    }
};

const deleteUser = async (id) => {
    try {
        const response = await request(`/users/${id}`, 'delete')
        return response.data
    } catch (err) {
        console.error(err)
    }
};


export default { getAll, getOne, getUserTags, addOrRemoveTag, updateUser, deleteUser };