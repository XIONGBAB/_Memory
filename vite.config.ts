import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import postCssPxToRem from 'postcss-pxtorem';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { prismjsPlugin } from 'vite-plugin-prismjs';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      vue(),
      VueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      prismjsPlugin({
        languages: 'all',
        plugins: ['line-numbers', 'show-language', 'copy-to-clipboard', 'inline-color'],
        theme: 'Tomorrow',
        css: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 75,
            propList: ['*', '!font-size'],
            selectorBlackList: ['.norem'],
            mediaQuery: false,
            minPixelValue: 2,
            exclude: /(node_modules|src\/assets\/styles\/common\.scss)/i
          })
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/variable.scss" as *;`
        }
      }
    },
    server: {
      port: 8080,
      open: true,
      proxy: {
        // "/api": "http://xx.com",
        '/api': 'http://localhost:5080/'
      },
      cors: true
    }
  };
});
