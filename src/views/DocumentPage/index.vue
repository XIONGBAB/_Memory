<template>
  <div class="container">
    <div class="doc-nav">
      <NavBar />
    </div>
    <div class="doc-layout">
      <div class="doc-aside">
        <AsideMenu />
      </div>
      <div class="doc-content">
        <div class="doc-content-box">
          <ContentMain />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='DocumentPage'>
import AsideMenu from '@/views/DocumentPage/AsideMenu/index.vue';
import ContentMain from '@/views/DocumentPage/ContentMain/index.vue';
import NavBar from '@/views/DocumentPage/NavBar/index.vue';
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
