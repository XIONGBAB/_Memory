<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </template>

    <template v-if="item.children && item.children.length === 1">
      <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden" @click="goRoute">
        <template #title>
          <el-icon><component :is="item.children[0].meta.icon"></component></el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta.icon" /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children" />
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts" name="layout-menu">
import { useRouter } from 'vue-router';
let $router = useRouter();
// 获取父组件传递过来的全部路由数组
defineProps(['menuList']);

// 点击路由跳转
const goRoute = (item: any) => {
  $router.push(item.index);
};
</script>

<script lang="ts">
export default {
  name: 'Menu',
};
</script>

<style scoped lang="scss"></style>
