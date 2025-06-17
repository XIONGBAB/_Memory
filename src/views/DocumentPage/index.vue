<template>
  <div class="container">
    <div class="doc-nav">
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
        <div class="user-logo"></div>
        <div class="user-name">
          Admin
        </div>
      </div>
    </div>
    <div class="doc-layout">
      <div class="doc-aside">
        <AsideMenu />
      </div>
      <div class="doc-content">
        <ContentMain />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='DocumentPage'>
import ContentMain from '@/components/ContentMain/index.vue';
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
}
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
      border-radius: 50%;
      background: url('@/assets/images/avatar.png') no-repeat;
      background-size: cover;
      margin-right: 10px;
    }
    .user-name {
    }
  }
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
    padding: 30px;
  }
}
</style>
