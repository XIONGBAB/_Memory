<template>
  <div class="doc-nav-list">
    <div class="doc-nav-list-item">
      首页
    </div>
    <div class="doc-nav-list-item">
      组件
    </div>
    <div class="doc-nav-list-item">
      资源
    </div>
  </div>
  <div class="dov-nav-information">
    <el-avatar class="user-logo" src="https://sns-avatar-qc.xhscdn.com/avatar/64689321979140ca8214df1b.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </el-avatar>
    <div class="user-name">
      Admin
    </div>
  </div>
</template>

<script setup lang='ts' name=''>
const errorHandler = () => true;
</script>

<style scoped lang='scss'>
.doc-nav {
  width: 100%;
  height: 100%;
  flex: 0 0 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid $bd-color-light;
  box-shadow: $box-shadow-gray;
  padding: 0 30px;
  font-size: 14px;
  color: $text-aside-gray;
  .doc-nav-list {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    .doc-nav-list-item {
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
      &:hover {
        color: $primary-base;
      }
    }
  }
  .dov-nav-information {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .user-logo {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
}
.doc-layout {
  flex: 1;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: 240px 1fr;
  overflow: hidden;
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
