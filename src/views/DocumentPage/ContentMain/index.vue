<template>
  <!-- <div class="content">
    <div v-for="i in 100">
      {{ i }}
    </div>
  </div> -->
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts" name="ContentMain"></script>

<style scoped lang="scss">
.content {
  margin-top: 120px;
  margin-right: 30px;
  margin-left: 300px;
  margin-bottom: 30px;
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
