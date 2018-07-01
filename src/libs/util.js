import axios from 'axios';
import env from '../config/env';

let util = {

};
// util.title = function(title) {
//     title = title ? title + ' - Home' : 'iView project';
//     window.document.title = title;
// };

const ajaxUrl = env === 'development' ?
    'http://localhost:8080' :
    env === 'production' ?
        'http://caideyu.top' :
        'http://localhost:8080';

util.ajax = axios.create({
    responseType: 'json',
    baseURL: ajaxUrl,
    timeout: 30000
});

/**
 * 存储localStorage
 */
util.setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
util.getStore = name => {
    if (!name) return;
    return JSON.parse(window.localStorage.getItem(name));
};

/**
 * 删除localStorage
 */
util.removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
};



export default util;