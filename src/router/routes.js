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
        name: 'test',
        component: lazy(() => import('@/pages/test/index')),
      },
    ],
  },
];

export default routes;
