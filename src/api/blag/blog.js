import api from './api';

export const getBlog = (params) => {
    return api.fetchGet(api.baseUrl + 'get/blog/handle/', params);
};

export const getBlogList = (params) => {
    return api.fetchGet(api.baseUrl + 'get/blog/list/handle/', params);
};

export const addBlog = (params) => {
    return api.fetchPost(api.baseUrl + 'add/blog/handle/', params);
};

export const editBlog = (params) => {
    return api.fetchPut(api.baseUrl + 'edit/blog/handle/', params);
};

export const delBlog = (params) => {
    return api.fetchDel(api.baseUrl + 'del/blog/handle/', params);
};