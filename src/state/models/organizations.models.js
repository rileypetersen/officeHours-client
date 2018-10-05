import request from '../../helpers/request';

const getAllOrgs = async () => {
    const response = await request('/organizations');
    return response.data.data;
};

export { getAllOrgs };
