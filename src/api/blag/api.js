import util from '../../libs/util';

const api = util.ajax;

// http.interceptors.request.use(function(config) {
//     config.headers = config.headers || {'Content-type': 'application/json'}
//     // 在发送请求之前做些什么
//     config.data = config.data || {}
//     return config;
// }, function(error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });
//
// // 添加响应拦截器
// api.interceptors.response.use(function(response) {
//     // 对响应数据做点什么
//     // 成功返回
//     if (response.status == 200) {
//         if (response.data.meta.code == 6012) {
//             router.replace({
//                 path: '/wxapp/login'
//             })
//         }
//     } else {
//         // 成功返回，但是状态码不是200，返回状态码
//
//     }
//     return response;
// }, function(error) {
//     // 对响应错误做点什么
//     // loading隐藏
//     return Promise.reject(error);
// });
let csrfToken = window.document.getElementById('csrf-token');
if(csrfToken)
    csrfToken = csrfToken.getAttribute('content')
else
    csrfToken = '';
export default {
    fetchGet(url, params = {}, headers = {}) {
        headers['X-CSRFToken'] = csrfToken;
        return new Promise((resolve, reject) => {
            api.get(url, {
                params
            }, {
                headers: headers
            }).then(res => {
                resolve(res.data);
            }).catch(error => {
                reject(error);
            });
        });
    },
    fetchPost(url, params = {}, headers = {}) {
        headers['X-CSRFToken'] = csrfToken;
        return new Promise((resolve, reject) => {
            api.post(url, params, {
                headers: headers
            }).then(res => {
                resolve(res.data);
            }).then(res => {
                resolve(res.data);
            }).catch(error => {
                reject(error);
            });
        });
    },
    fetchPut(url, params = {}, headers = {}) {
        headers['X-CSRFToken'] = csrfToken;
        return new Promise((resolve, reject) => {
            api.put(url, params, {
                headers: headers
            }).then(res => {
                resolve(res.data);
            }).then(res => {
                resolve(res.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
};