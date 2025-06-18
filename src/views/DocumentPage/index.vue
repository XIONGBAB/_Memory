<template>
  <div class="container">
    <div class="doc-nav">
      <NavBar />
    </div>
    <div class="doc-layout">
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

const isCollapseWidth = ref<string>();

function getIsCollapse(data: boolean) {
  if (data) {
    isCollapseWidth.value = '240px';
  }
  else {
    isCollapseWidth.value = '84px';
  }
}
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
}
.doc-layout {
  flex: 1;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: v-bind(isCollapseWidth) 1fr;
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
  }
}
</style>
