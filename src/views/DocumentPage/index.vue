<template>
  <div class="container">
    <div class="layout-aside">
    </div>
    <div class="layout-header"></div>
    <div class="layout-main">
    </div>
  </div>
</template>

<script setup lang='ts' name='DocumentPage'>

</script>

<style scoped lang='scss'>
.container {
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
  border: 1px solid blue;
}
</style>
