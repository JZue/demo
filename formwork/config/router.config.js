export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // 首页
      // { path: '/', redirect: '/article/list' },
  
      // //article
      // {
      //   path: '/article',
      //   routes: [  
      //     {
      //       path: '/article/edit',
      //       component: './Article/edit',
      //     },
      //     {
      //       path: '/article/list',
      //       component: './Article/list',
      //     },
      //   ]
      // },

      //   //comment
      //   {
      //     path: '/comment',
      //     routes: [  
      //       {
      //         path: '/comment/list',
      //         component: './Comments/List',
      //       },
      //     ]
      //   },

      // //tag
      // {
      //   path: '/tag',
      //   routes: [  
      //     {
      //       path: '/tag/list',
      //       component: './Tag/List',
      //     },
      //   ]
      // },
    ]
  }
     
];
