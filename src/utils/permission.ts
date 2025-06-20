import nprogress from "nprogress";
import router from "@/router";
import "nprogress/nprogress.css";

router.beforeEach((to: any, from: any, next: any) => {
  nprogress.start();
  next();
});

// 全局后置守卫
router.afterEach((to: any, from: any, next: any) => {
  nprogress.done();
});
