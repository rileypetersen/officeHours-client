import request from '../../helpers/request';

const getAllOrgs = async () => {
    console.log('fuckinghello');
    const orgs = await request('/organizations');
    console.log(orgs.data);
    return orgs.data.data;
};

export { getAllOrgs };
