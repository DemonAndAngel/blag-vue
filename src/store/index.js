import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        blogUserInfo: null, // 用户信息
    },
    mutations: mutations
});

export default store;
