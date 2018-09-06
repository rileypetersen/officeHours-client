import axios from 'axios';
const BASE_URL = process.env.BASE_URL;


const getAll = async () => {
    const response = axios.get(`${BASE_URL}/users`)
    console.log(response)
    return response.data
}

const getOne = async (id) => {
    const response = axios.get(`${BASE_URL}/users/${id}`)
    console.log(response)
    return response.data
}


export default { getAll, getOne }