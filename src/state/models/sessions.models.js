import request from '../../helpers/request';


const createSession = async (body) => {
    const payload = request('/sessions', 'post', body);
    return payload.data;
};


export { createSession };
