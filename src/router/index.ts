import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute, // 创建router.ts 统一管理
  scrollBehavior() {
    // 滚动行为
    return {
      left: 0,
      top: 0,
    };
  },
});

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//   // const store = useUserStore();
//   // if (store.token) {
//   //   next();
//   // } else {
//   //   if (to.path) {
//   //     console.log(to.path);
//   //   }
//   // }
//   if (to.path === '/doc') {
//     next({ path: '/data', replace: true }); // 使用 replace 进行替换，不留历史记录
//   } else {
//     next(); // 确保一定要调用 next()
//   }
// });

export default router;
