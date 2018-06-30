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

export default util;