<template>
  <div class="container">
    <div class="layout-aside">
    </div>
    <div class="layout-header"></div>
    <div class="layout-main">
      <div class="box"></div>
    </div>
  </div>
</template>

<script setup lang='ts' name='LayoutPage'>

</script>

<style scoped lang='scss'>
.container {
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
  border: 1px solid blue;
}

.box {
  width: 100px;
  height: 100px;
  background: #eee;
}

// .layout-aside {
//   height: 100%;
//   background: #f5f5f5;
// }</style>
