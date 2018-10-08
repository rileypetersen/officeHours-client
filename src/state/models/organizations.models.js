import request from '../../helpers/request';

const getAllOrgs = async () => {
    const response = await request('/organizations');
    return response.data;
};

const getOneOrg = async (id) => {
    const response = await request(`organization/${id}`)
    return response.data;
};

export { getAllOrgs, getOneOrg };
