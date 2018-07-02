import api from './api';

export const login = (params) => {
    return api.fetchPost(api.baseUrl + 'login/handle/', params);
};

export const loginOut = (params) => {
    return api.fetchPost(api.baseUrl + 'logout/handle/', params);
};

export const register = (params) => {
    return api.fetchPost(api.baseUrl + 'register/handle/', params);
};
