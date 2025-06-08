import type { RouteRecordRaw } from 'vue-router';

export const constantRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/HomePage/index.vue'),
    name: 'home'
  },
  {
    path: '/doc',
    component: () => import('@/views/DocumentPage/index.vue'),
    name: 'document'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage/index.vue'),
    name: 'login'
  },
  {
    path: '/404',
    component: () => import('@/views/ErrorsPage/index.vue'),
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any'
  }
];
