import path from "node:path";
import vue from "@vitejs/plugin-vue";
import postCssPxToRem from "postcss-pxtorem";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vite.dev/config/
export default defineConfig((_command) => {
  return {
    base: "./",
    plugins: [
      vue(),
      VueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/variable.scss" as *;`,
        },
      },
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 75,
            propList: ["*"],
            selectorBlackList: [/^html$/, "-no-rem"],
            mediaQuery: false,
            minPixelValue: 2,
            exclude: /node_modules/i,
          }),
        ],
      },
    },
    server: {
      open: true,
      host: "0.0.0.0",
      port: 8002,
      proxy: {
        "/api": "http://xx.com",
      },
      cors: true,
      strictPort: true,
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  };
});
