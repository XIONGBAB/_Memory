<template>
  <div class="container">
    <NavBar />
    <AsideMenu />
    <ContentMain />
  </div>
</template>

<script setup lang="ts" name="DocumentPage">
import AsideMenu from "@/views/DocumentPage/AsideMenu/index.vue";
import ContentMain from "@/views/DocumentPage/ContentMain/index.vue";
import NavBar from "@/views/DocumentPage/NavBar/index.vue";
</script>

<style scoped lang="scss"></style>
