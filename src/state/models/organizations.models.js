import request from '../../helpers/request';

const getAllOrgs = async () => {
    const orgs = await request('/organizations');
    return orgs.data.data;
};

export { getAllOrgs };
