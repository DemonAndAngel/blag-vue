import api from './api';

const baseUrl = 'api/';

export const login = (params) => {
    return api.fetchPost(baseUrl + 'loginHandle/', params);
};

export const loginOut = (params) => {
    return api.fetchPost(baseUrl + 'logoutHandle/', params);
};

export const register = (params) => {
    return api.fetchPost(baseUrl + 'registerHandle/', params);
};