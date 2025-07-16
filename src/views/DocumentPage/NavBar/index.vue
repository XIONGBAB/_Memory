<template>
  <div class="content-nav-bar">
    <div class="nav-list">
      <div class="nav-list-item" @click="backHome">首页</div>
      <div class="nav-list-item" @click="toggleDark()">组件</div>
      <div class="nav-list-item">资源</div>
    </div>
    <div class="nav-information">
      <el-popover class="box-item" content="Error" placement="bottom">
        <template #reference>
          <div class="nav-information-logo">
            <el-avatar
              class="user-logo"
              src="https://sns-avatar-qc.xhscdn.com/avatar/64689321979140ca8214df1b.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2"
              @error="errorHandler"
            >
              <img
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
              />
            </el-avatar>
            <i>Admin</i>
          </div>
        </template>
        <template #default>
          <div class="nav-information-setting">
            <el-icon><User /></el-icon>
            <span>个人主页</span>
          </div>
          <div class="nav-information-setting">
            <el-icon><Setting /></el-icon>
            <span>帐号设置</span>
          </div>
          <div class="nav-information-setting">
            <el-icon><SwitchButton /></el-icon>
            <span>退出登录</span>
          </div>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup lang="ts" name="NavBar">
import { useDark, useToggle } from "@vueuse/core";
import router from "@/router";

const errorHandler = () => true;
function backHome() {
  router.push({ path: "/" });
}

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped lang="scss">
.content-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 60px;
  width: 100%;
  height: 60px;
  background: $bg-color-base;
  border-bottom: 1px solid $bd-color-light;
  box-shadow: $box-shadow-gray;
  font-size: 14px;
  color: $text-aside-gray;
  z-index: 1;
}
.nav-list {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  .nav-list-item {
    position: relative;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    margin: 0 20px;
    cursor: pointer;
    &:hover {
      color: $primary-base;
    }
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 120%;
      height: 2px;
      background-color: $primary-base;
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
    &:hover::before {
      transform: translate(-50%, 0) scaleX(1);
    }
  }
}
.nav-information {
  cursor: pointer;
}
.nav-information-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-style: normal;
    font-weight: normal;
    padding-left: 15px;
  }
}
.nav-information-setting {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  span {
    padding-left: 10px;
    font-size: 14px;
    color: $text-color-p;
    &:hover {
      color: $primary-base;
    }
  }
}
</style>
