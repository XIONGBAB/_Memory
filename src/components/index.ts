import type { App, Component } from 'vue';

import AsideMenu from '@/components/AsideMenu/index.vue';

const components: { [name: string]: Component } = { AsideMenu };
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  }
};
