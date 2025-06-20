import { defineStore } from "pinia";
import { constantRoute } from "@/router/router";

const useMenuStore = defineStore("Menu", {
  state: () => {
    return {
      menuRoutes: constantRoute, // 存储菜单路由
    };
  },
  actions: {},
  getters: {},
});

export default useMenuStore;
