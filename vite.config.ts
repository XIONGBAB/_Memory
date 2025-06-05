import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import postCssPxToRem from 'postcss-pxtorem';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*'],
          selectorBlackList: ['.norem'],
          mediaQuery: true
        })
      ]
    }
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 3000, // 端口号
    proxy: {
      '/api': 'http://localhost:8000',
      '/imgs': 'http://localhost:8000'
    }
  }
});
