import type { RouteRecordRaw } from "vue-router";

export const constantRoute: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/views/LoginPage/index.vue"),
    name: "login",
    meta: {
      title: "登录",
      hidden: true, // hide in the menu
    },
  },
  {
    path: "/404",
    component: () => import("@/views/ErrorsPage/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "任意路由",
      hidden: true,
    },
  },
  {
    path: "/",
    component: () => import("@/views/HomePage/index.vue"),
    name: "homePage",
    meta: {
      title: "Home",
      icon: "HomeFilled",
      hidden: true,
    },
  },
  {
    path: "/doc",
    component: () => import("@/views/DocumentPage/index.vue"),
    redirect: "/data", // redirect to the first child route
    children: [
      {
        path: "/data",
        component: () => import("@/components/ContentList/DataPage/index.vue"),
        name: "Data",
        meta: {
          title: "Data",
          icon: "Coin",
        },
      },
    ],
  },
  {
    path: "/program",
    component: () => import("@/views/DocumentPage/index.vue"),
    name: "Program",
    meta: {
      title: "Program",
      icon: "MostlyCloudy",
    },
    children: [
      {
        path: "/program/html",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Language/Html/index.vue"
          ),
        name: "html",
        meta: {
          title: "Html",
          icon: "Tickets",
        },
      },
      {
        path: "/program/css",
        component: () =>
          import("@/components/ContentList/ProgramPage/Language/Css/index.vue"),
        name: "css",
        meta: {
          title: "Css",
          icon: "Tickets",
        },
      },
      {
        path: "/program/css3",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Language/Css3/index.vue"
          ),
        name: "css3",
        meta: {
          title: "Css3",
          icon: "Tickets",
        },
      },
      {
        path: "/program/jQuery",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Language/JQuery/index.vue"
          ),
        name: "jQuery",
        meta: {
          title: "JQuery",
          icon: "Tickets",
        },
      },
      {
        path: "/program/javascript",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Language/Javascript/index.vue"
          ),
        name: "javascript",
        meta: {
          title: "Javascript",
          icon: "Tickets",
        },
      },
    ],
  },
  {
    path: "/design",
    component: () => import("@/views/DocumentPage/index.vue"),
    name: "design",
    meta: {
      title: "Design",
      icon: "EditPen",
    },
    children: [
      {
        path: "/design/vue2",
        component: () =>
          import("@/components/ContentList/ProgramPage/Design/Vue2/index.vue"),
        name: "vue2",
        meta: {
          title: "Vue2",
          icon: "Tickets",
        },
      },
      {
        path: "/design/vue3",
        component: () =>
          import("@/components/ContentList/ProgramPage/Design/Vue3/index.vue"),
        name: "vue3",
        meta: {
          title: "Vue3",
          icon: "Tickets",
        },
      },
      {
        path: "/design/applet",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Design/Applet/index.vue"
          ),
        name: "applet",
        meta: {
          title: "Applet",
          icon: "Tickets",
        },
      },
      {
        path: "/design/uni-app",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Design/Uni_app/index.vue"
          ),
        name: "uni-app",
        meta: {
          title: "Uni-app",
          icon: "Tickets",
        },
      },
      {
        path: "/design/python",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Design/Python/index.vue"
          ),
        name: "python",
        meta: {
          title: "Python",
          icon: "Tickets",
        },
      },
    ],
  },
  {
    path: "/frames",
    component: () => import("@/views/DocumentPage/index.vue"),
    name: "frames",
    meta: {
      title: "Frames",
      icon: "FullScreen",
    },
    children: [
      {
        path: "/frames/frame",
        component: () =>
          import("@/components/ContentList/ProgramPage/Frames/Frame/index.vue"),
        name: "frame",
        meta: {
          title: "Frame",
          icon: "Tickets",
        },
      },
      {
        path: "/frames/mobile",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Frames/Mobile/index.vue"
          ),
        name: "mobile",
        meta: {
          title: "Mobile",
          icon: "Tickets",
        },
      },
      {
        path: "/frames/standard",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Frames/Standard/index.vue"
          ),
        name: "standard",
        meta: {
          title: "Standard",
          icon: "Tickets",
        },
      },
      {
        path: "/frames/codeEffect",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Frames/CodeEffect/index.vue"
          ),
        name: "codeEffect",
        meta: {
          title: "CodeEffect",
          icon: "Tickets",
        },
      },
    ],
  },
  {
    path: "/service",
    component: () => import("@/views/DocumentPage/index.vue"),
    name: "service",
    meta: {
      title: "Service",
      icon: "Monitor",
    },
    children: [
      {
        path: "/service/sass",
        component: () =>
          import("@/components/ContentList/ProgramPage/Service/Sass/index.vue"),
        name: "sass",
        meta: {
          title: "Sass",
          icon: "Tickets",
        },
      },
      {
        path: "/service/ajax",
        component: () =>
          import("@/components/ContentList/ProgramPage/Service/Ajax/index.vue"),
        name: "ajax",
        meta: {
          title: "Ajax",
          icon: "Tickets",
        },
      },
      {
        path: "/service/mysql",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Service/Mysql/index.vue"
          ),
        name: "mysql",
        meta: {
          title: "Mysql",
          icon: "Tickets",
        },
      },
      {
        path: "/service/other",
        component: () =>
          import("@/components/ContentList/ProgramPage/Other/index.vue"),
        name: "other",
        meta: {
          title: "Other",
          icon: "Tickets",
        },
      },
      {
        path: "/service/regexp",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Service/Regexp/index.vue"
          ),
        name: "regexp",
        meta: {
          title: "Regexp",
          icon: "Tickets",
        },
      },
      {
        path: "/service/webpack",
        component: () =>
          import(
            "@/components/ContentList/ProgramPage/Service/Webpack/index.vue"
          ),
        name: "webpack",
        meta: {
          title: "Webpack",
          icon: "Tickets",
        },
      },
    ],
  },
  {
    path: "/classify",
    component: () => import("@/views/DocumentPage/index.vue"),
    name: "classify",
    meta: {
      title: "Classify",
      icon: "Star",
    },
    children: [
      {
        path: "/classify/plugin",
        component: () =>
          import("@/components/ContentList/ClassifyPage/Plugin/index.vue"),
        name: "plugin",
        meta: {
          title: "Plugin",
          icon: "Tickets",
        },
      },
      {
        path: "/classify/system",
        component: () =>
          import("@/components/ContentList/ClassifyPage/System/index.vue"),
        name: "system",
        meta: {
          title: "System",
          icon: "Tickets",
        },
      },
      {
        path: "/classify/document",
        component: () =>
          import("@/components/ContentList/ClassifyPage/Document/index.vue"),
        name: "document",
        meta: {
          title: "Document",
          icon: "Tickets",
        },
      },
    ],
  },
  {
    path: "/link",
    component: () => import("@/views/DocumentPage/index.vue"),
    children: [
      {
        path: "/link",
        name: "Link",
        component: () => import("@/components/ContentList/LinkPage/index.vue"),
        meta: {
          title: "Link",
          icon: "Link",
        },
      },
    ],
  },
];
