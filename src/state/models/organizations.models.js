import request from '../../helpers/request';

const getAllOrgs = async () => {
    const response = await request('/organizations');
    return response.data;
};

const getOneOrg = async (id, history) => {
    const response = await request(`/organizations/${id}`);
    return response.data;
};

const addOrgUser = async (id, body) => {
    const response = await request(`/organizations/${id}/users`, 'post', body);
    return response.data;
};

export { getAllOrgs, getOneOrg, addOrgUser };
