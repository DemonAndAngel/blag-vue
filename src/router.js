const Index = (resolve) => require(['./views/blog/index.vue'], resolve);
const Login = (resolve) => require(['./views/blog/user/login.vue'], resolve);


const routers = [
    {
        path: '/',
        redirect: '/blog'
    },
    {
        path: '/blog',
        name: 'index',
        component: Index
    },
    {
        path: '/blog/login',
        name: 'login',
        component: Login
    }
];


// const routers = [{
//     path: '/',
//     meta: {
//         title: ''
//     },
//     component: (resolve) => require(['./views/index.vue'], resolve)
// }];
export default routers;