export default [
    // app
    {
        path: '/',
        component: '../layouts/index',
        routes: [
            // dashboard
            // {path: '/', redirect: '/home/index'},
            {
                path: '/',
                component: './Home/index',
            },
            {
                component: '404',
            },
        ],
    },
];
