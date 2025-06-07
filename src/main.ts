import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createApp } from 'vue';
import App from './App.vue';
import 'sanitize.css';
import 'element-plus/dist/index.css'; // 样式
import 'amfe-flexible';
import '@/utils/rem';
import '@/assets/styles/common.scss';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
