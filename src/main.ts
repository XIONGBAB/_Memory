import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createApp } from "vue";
// import globalComponent from '@/components/index';
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
import "element-plus/dist/index.css";
import "@/utils/permission";
import "@/assets/styles/common.scss";
import "amfe-flexible";
import "sanitize.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia);
app.use(router);
// app.use(globalComponent);
app.mount("#app");
