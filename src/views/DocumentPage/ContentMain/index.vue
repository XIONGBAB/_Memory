<template>
  <div class="content-main">
    <slot></slot>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts" name="ContentMain"></script>

<style scoped lang="scss">
.content-main {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
}
[class^='content-main-page'] {
  flex: 1;
  padding: 60px 060px 0;
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
