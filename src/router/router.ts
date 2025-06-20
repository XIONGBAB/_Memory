import type { RouteRecordRaw } from 'vue-router';

export const constantRoute: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/LoginPage/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/ErrorsPage/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true
    }
  },
  {
    path: '/',
    component: () => import('@/views/HomePage/index.vue'),
    name: 'homePage',
    meta: {
      title: 'Home',
      icon: 'HomeFilled',
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true
    }
  },
  {
    path: '/data',
    component: () => import('@/views/DocumentPage/index.vue'),
    children: [
      {
        path: '/data',
        name: 'Data',
        component: () => import('@/views/ContentList/DataPage/index.vue'),
        meta: {
          title: 'Data',
          icon: 'Coin'
        }
      }
    ]
  },
  {
    path: '/program',
    component: () => import('@/views/DocumentPage/index.vue'),
    name: 'Program',
    meta: {
      title: 'Program',
      icon: 'MostlyCloudy'
    },
    children: [
      {
        path: '/program/html',
        component: () => import('@/views/ContentList/ProgramPage/Language/Html/index.vue'),
        name: 'Html',
        meta: {
          title: 'Html'
        }
      },
      {
        path: '/program/css',
        component: () => import('@/views/ContentList/ProgramPage/Language/Css/index.vue'),
        name: 'Css',
        meta: {
          title: 'Css'
        }
      }
    ]
  },
  {
    path: '/design',
    component: () => import('@/views/DocumentPage/index.vue'),
    name: 'design',
    meta: {
      title: 'Design',
      icon: 'Brush'
    },
    children: [
      {
        path: '/design/vue2',
        component: () => import('@/views/ContentList/ProgramPage/Design/Vue2/index.vue'),
        name: 'vue2',
        meta: {
          title: 'Vue2'
        }
      },
      {
        path: '/design/vue3',
        component: () => import('@/views/ContentList/ProgramPage/Design/Vue3/index.vue'),
        name: 'vue3',
        meta: {
          title: 'Vue3'
        }
      },
      {
        path: '/design/applet',
        component: () => import('@/views/ContentList/ProgramPage/Design/Applet/index.vue'),
        name: 'applet',
        meta: {
          title: 'Applet'
        }
      }
    ]
  },
  {
    path: '/frames',
    component: () => import('@/views/DocumentPage/index.vue'),
    name: 'frames',
    meta: {
      title: 'Frames',
      icon: 'Tickets'
    }
  },
  {
    path: '/service',
    component: () => import('@/views/DocumentPage/index.vue'),
    name: 'service',
    meta: {
      title: 'Service',
      icon: 'Service'
    }
  },
  {
    path: '/link',
    component: () => import('@/views/DocumentPage/index.vue'),
    children: [
      {
        path: '/link',
        name: 'Link',
        component: () => import('@/views/ContentList/LinkPage/index.vue'),
        meta: {
          title: 'Link',
          icon: 'Link'
        }
      }
    ]
  }

];
