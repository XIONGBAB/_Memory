import type { App, Component } from "vue";
import CardContainer from "@/components/CardContainer/index.vue";

const components: { [name: string]: Component } = { CardContainer };
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
