<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <template #title>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>

    <template v-if="item.children && item.children.length === 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <el-icon><component :is="item.children[0].meta.icon" /></el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
    >
      <template #title>
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuTree :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts" name="MenuTree">
import { useRouter } from "vue-router";

// 获取父组件传递过来的全部路由数组
defineProps(["menuList"]);
const $router = useRouter();
// 点击路由跳转
function goRoute(item: any) {
  $router.push(item.index);
}
</script>

<script lang="ts">
export default {
  name: "MenuTree", // ** 重点 ** 为组件提供明确的名称，用于：递归组件自引用 调试工具中显示组件名
};
</script>

<style scoped lang="scss"></style>
