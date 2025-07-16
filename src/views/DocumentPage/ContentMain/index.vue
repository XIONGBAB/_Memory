<template>
  <div
    v-loading="loading"
    element-loading-text="加载中..."
    class="content"
    :style="{ marginLeft: menuStore.isCollapse ? '144px' : '300px' }"
  >
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts" name="ContentMain">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import useMenuStore from "@/store/modules/menu";

const loading = ref(false);
const menuStore = useMenuStore();
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    loading.value = true;
    document.body.style.overflow = "hidden"; // 禁止滚动
    setTimeout(() => {
      loading.value = false;
      document.body.style.overflow = "";
    }, 1500);
  },
);
</script>

<style scoped lang="scss">
::v-deep(.el-loading-spinner) {
  top: 300px;
  left: 50%;
  transform: translate(-50%, 0);
}
.content {
  margin: 120px 30px 30px 0;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
}
// transition
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-leave-active {
  transition-delay: 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(1.0667rem);
  opacity: 0;
}
</style>
