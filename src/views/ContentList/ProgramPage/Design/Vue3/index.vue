<template>
  <card-container :title="`vue3`" :data="data">
    <template #svg>
      <svg width="40" height="40" t="1699148478737" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6334">
        <path d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z" fill="#41B883" p-id="6335"></path>
        <path d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z" fill="#34495E" p-id="6336"></path>
      </svg>
    </template>
    <template #describe>
      <p>Vue 3是Vue.js的最新版本,Vue 3采用了新的虚拟DOM算法，通过更好的内存管理和优化的diff算法，显著提升了渲染速度和内存使用效率。组合式API是Vue 3的核心特性之一。Vue 3适用于各种前端开发场景，特别是构建复杂的单页应用和组件库。</p>
    </template>
    <template #content>
      <el-card shadow="hover" id="part1">
        <h2></h2>
        <div class="ls-cot"></div>
      </el-card>
    </template>
  </card-container>
</template>
<script setup lang="ts" name="vue3">
import { ref } from 'vue';
let data = ref([
  { id: 1, h2: '' },
  { id: 2, h2: '' },
]);
</script>
<style scoped lang="scss"></style>
