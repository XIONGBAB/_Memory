import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './locales';
import router from './router';
import pinia from './store';
import 'element-plus/dist/index.css';
import '@/utils/permission.ts';
import 'amfe-flexible';
import 'sanitize.css';
import '@/assets/styles/common.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia);
app.use(router);
app.use(i18n);
app.mount('#app');
