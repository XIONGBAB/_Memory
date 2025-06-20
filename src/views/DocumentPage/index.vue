<template>
  <div class="container">
    <div class="doc-nav">
      <NavBar />
    </div>
    <div class="doc-layout" :class="{ 'doc-layout-active': isCollapseWidth }">
      <div class="doc-aside">
        <AsideMenu @send-is-collapse="getIsCollapse" />
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
import { ref } from 'vue';
import AsideMenu from '@/views/DocumentPage/AsideMenu/index.vue';
import ContentMain from '@/views/DocumentPage/ContentMain/index.vue';
import NavBar from '@/views/DocumentPage/NavBar/index.vue';

const isCollapseWidth = ref();

function getIsCollapse(data: boolean) {
  isCollapseWidth.value = !data;
}
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
}

.container .doc-layout-active {
  grid-template-columns: 84px 1fr;
}
.doc-layout {
  flex: 1;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: 240px 1fr;
  overflow: hidden;
  transition: $transition-all;
  .doc-aside {
    grid-row: 1 / -1;
    grid-column: 1;
  }
  .doc-content {
    position: relative;
    grid-row: 1 / -1;
    grid-column: 2;
    margin: 60px 60px 0 60px;
  }
  .doc-content-box {
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
}
</style>
