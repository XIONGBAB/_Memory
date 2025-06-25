<template>
  <div
    class="content"
    :style="{ marginLeft: menuStore.isCollapse ? '144px' : '300px' }"
  >
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts" name="ContentMain">
import useMenuStore from '@/store/modules/menu';

const menuStore = useMenuStore();
</script>

<style scoped lang="scss">
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
