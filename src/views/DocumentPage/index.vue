<template>
  <div class="container">
    <div class="doc-nav"></div>
    <div class="doc-layout">
      <div class="doc-aside">
        <AsideMenu />
      </div>
      <div class="doc-content"></div>
    </div>
  </div>
</template>

<script setup lang='ts' name='DocumentPage'>

</script>

<style scoped lang='scss'>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
}
// .container {
//   display: grid;
//   grid-template-rows: 60px repeat(24, 1fr);
//   grid-template-columns: repeat(24, 1fr);
// }
.doc-nav {
  flex: 0 0 60px;
  border-bottom: 1px solid $bd-color-light;
  box-shadow: $box-shadow-gray;
}
.doc-layout {
  flex: 1;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: 240px 1fr;
  .doc-aside {
    grid-row: 1 / -1;
    grid-column: 1;
  }
  .doc-content {
    grid-row: 1 / -1;
    grid-column: 2;
  }
}
</style>
