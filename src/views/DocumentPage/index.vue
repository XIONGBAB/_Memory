<template>
  <div class="container">
    <div class="doc-nav"></div>
    <div class="doc-layout">
      <div class="doc-aside"></div>
      <div class="doc-content"></div>
    </div>
  </div>
</template>

<script setup lang='ts' name='DocumentPage'>

</script>

<style scoped lang='scss'>
.container {
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
  border: $bd-test;
}
.doc-layout {
  flex: 1;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: 240px 1fr;
  border: 1px solid red;
  .doc-aside {
    grid-row: 1 / -1;
    grid-column: 1;
    background: #f0f0f0;
  }
  .doc-content {
    grid-row: 1 / -1;
    grid-column: 2;
    background: #e0e0e0;
  }
}
</style>
