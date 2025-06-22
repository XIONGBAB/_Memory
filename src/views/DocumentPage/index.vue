<template>
  <div class="container">
    <AsideMenu />
    <ContentMain>
      <NavBar />
    </ContentMain>
  </div>
</template>

<script setup lang="ts" name="DocumentPage">
import AsideMenu from '@/views/DocumentPage/AsideMenu/index.vue';
import ContentMain from '@/views/DocumentPage/ContentMain/index.vue';
import NavBar from '@/views/DocumentPage/ContentMain/NavBar/index.vue';
</script>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
}
</style>
