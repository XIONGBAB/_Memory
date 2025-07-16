import nprogress from 'nprogress';
// 在鉴权文件里处理
import router from '@/router';
import 'nprogress/nprogress.css';

router.beforeEach((_to: any, _from: any, next: any) => {
  nprogress.start();
  next();
});

// 全局后置守卫
router.afterEach((_to: any, _from: any, _next: any) => {
  nprogress.done();
});
