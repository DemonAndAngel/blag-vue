import {
    BLOG_SAVE_USER_INFO,
    BLOG_GET_USER_INFO,
    BLOG_REMOVE_USER_INFO
} from './mutation-types';
import Util from '../libs/util';

export default {
    // 保存用户信息
    [BLOG_SAVE_USER_INFO](state, payload) {
        state.blogUserInfo = payload;
        Util.setStore('blog-user-info', payload);
    },
    // 获取用户信息
    [BLOG_GET_USER_INFO](state) {
        if (!state.blogUserInfo) {
            state.blogUserInfo = Util.getStore('blog-user-info');
        }
    },
    // 删除用户信息
    [BLOG_REMOVE_USER_INFO](state) {
        Util.removeStore('blog-user-info');
        state.blogUserInfo = null;
    },

};
