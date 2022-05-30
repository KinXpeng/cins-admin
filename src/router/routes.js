import { lazy } from 'react';
const routes = [
  {
    path: '/login',
    name: 'login',
    component: lazy(() => import('@/pages/login/index')),
  },
  {
    path: '/',
    name: 'layout',
    component: lazy(() => import('@/pages/layout/index')),
    children: [
      {
        path: '/',
        name: 'home',
        component: lazy(() => import('@/pages/home/index')),
      },
      {
        path: '/userList', // 用户列表
        name: 'userList',
        component: lazy(() => import('@/pages/userManage/userList/index')),
      },

      {
        path: '/diaryList', // 日记列表
        name: 'diaryList',
        component: lazy(() => import('@/pages/diaryManage/homePage')),
      },
      {
        path: '/journeyTake', // 日记列表 JourneyTake
        name: 'journeyTake',
        component: lazy(() => import('@/pages/diaryManage/journeyTake')),
      },

      {
        path: '/momentStatus', // 状态
        name: 'momentStatus',
        component: lazy(() => import('@/pages/momentStatus/index')),
      },
    ],
  },
];

export default routes;
