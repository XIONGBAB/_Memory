import SvgIcon from './SvgIcon/index.vue';

import type { App, Component } from 'vue';
const components: { [name: string]: Component } = { SvgIcon,Xxx };   // 有几个需要注册的引入几个
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};