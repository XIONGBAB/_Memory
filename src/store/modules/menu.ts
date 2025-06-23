import { defineStore } from "pinia";
import { constantRoute } from "@/router/router";

const useMenuStore = defineStore("Menu", {
  state: () => {
    return {
      menuRoutes: constantRoute, // 存储菜单路由
      isCollapse: false, // 菜单中isCollapse
    };
  },
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  getters: {},
});

export default useMenuStore;
