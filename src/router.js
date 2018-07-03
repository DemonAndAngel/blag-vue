const BlogApp = (resolve) => require(['./views/blog/app.vue'], resolve);
const BlogIndex = (resolve) => require(['./views/blog/index.vue'], resolve);
const BlogLogin = (resolve) => require(['./views/blog/user/login.vue'], resolve);
const BlogRegister = (resolve) => require(['./views/blog/user/register.vue'], resolve);
const BlogWrite = (resolve) => require(['./views/blog/write.vue'], resolve);
const BlogUser = (resolve) => require(['./views/blog/user/user.vue'], resolve);
const BlogUserSetting = (resolve) => require(['./views/blog/user/setting.vue'], resolve);

const routers = [
    {
        path: '/',
        redirect: '/blog/index'
    },
    {
        path: '/blog',
        name: 'blog-app',
        component: BlogApp,
        redirect: '/blog/index',
        children: [
            {
                path: 'index',
                name: 'blog-index',
                component: BlogIndex,
            },
            {
                path: 'login',
                name: 'blog-login',
                component: BlogLogin,
            },
            {
                path: 'register',
                name: 'blog-register',
                component: BlogRegister,
            },
            {
                path: 'write',
                name: 'blog-write',
                component: BlogWrite,
            },
            {
                path: 'user',
                redirect: '/blog/user/setting',
                component: BlogUser,
                children: [
                    {
                        path: 'setting',
                        name: 'blog-user-setting',
                        component: BlogUserSetting
                    }
                ]
            }
        ]
    },

];


// const routers = [{
//     path: '/',
//     meta: {
//         title: ''
//     },
//     component: (resolve) => require(['./views/index.vue'], resolve)
// }];
export default routers;