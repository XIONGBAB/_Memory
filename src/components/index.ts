import type { App, Component } from 'vue';

import Layout from '@/components/Layout/index.vue';

const components: { [name: string]: Component; } = { Layout };
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  }
};
