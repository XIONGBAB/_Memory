<template>
  <div class="contentMain">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts" name="ContentMain"></script>

<style scoped lang="scss">
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
