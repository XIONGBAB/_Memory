<template>
  <el-container>
    <div class="home-bg-box">
      <div class="home-main-bg">
        <div class="home-main-bg-b1"></div>
        <div class="home-main-bg-b2 bg-circle"></div>
        <div class="home-main-bg-b3"></div>
        <div class="home-main-bg-b4"></div>
        <div class="home-main-bg-b5 bg-circle">
          <div class="home-main-bg-b5-1"></div>
          <div class="home-main-bg-b5-2">
            <div class="home-main-avatar"></div>
          </div>
          <div class="home-main-bg-b5-3"></div>
          <div class="home-main-bg-b5-4">
            <h1 @click="goToHome">
              Hi, I'm XIONGBAB.
            </h1>
            <p>
              I am an amateur developer and learning programming is my hobby. At present, I have learned HTML, CSS,
              Javascript, and Vue3, but of course, this is still in the learning stage. If you can, you can provide me
              with some guidance on optimization on the website I have written. Thank you!
            </p>
          </div>
        </div>
        <div class="home-main-bg-b6"></div>
        <div class="home-main-bg-b7"></div>
        <div class="home-main-bg-b8"></div>
        <div class="home-main-bg-b9">
          <div class="home-main-dev">
            <i></i>
            <p>development time June 6th, 2025 </p>
          </div>
          <div class="home-main-switch">
            <el-icon size="18">
              <Open />
            </el-icon>
            <p>Lights</p>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script setup lang='ts' name='HomePage'>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push('/doc');
}
</script>

<style scoped lang='scss'>
.home-bg-box {
  width: 100%;
  min-width: auto;
  height: 100vh;
  background: $bg-color-light-gray;
  border-radius: $border-radius-bg;
  padding: 30px;
}

.home-main-bg {
  width: 100%;
  height: 100%;
  background-color: $bg-color-base;
  border-radius: $border-radius-bg;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);

  .bg-circle {
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(-58%, 58%);
      width: 8px;
      height: 8px;
      background: $border-color-gray;
      border-radius: $border-radius-circle;
      box-shadow: 0 0 0 2px $border-color-white;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(58%, 58%);
      width: 8px;
      height: 8px;
      background: $border-color-gray;
      border-radius: $border-radius-circle;
      box-shadow: 0 0 0 2px $border-color-white;
    }
  }

  .home-main-bg-b1,
  .home-main-bg-b2,
  .home-main-bg-b3 {
    grid-row: span 2;
    border-right: 1px dashed $border-bg-line;
    border-bottom: 1px dashed $border-bg-line;
    grid-column: span 4;
  }

  .home-main-bg-b2 {
    position: relative;
    grid-column: span 16;
  }

  .home-main-bg-b4,
  .home-main-bg-b5,
  .home-main-bg-b6 {
    grid-row: span 16;
    border-right: 1px dashed $border-bg-line;
    grid-column: span 4;
  }

  .home-main-bg-b5 {
    position: relative;
    grid-column: span 16;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);

    .home-main-bg-b5-1,
    .home-main-bg-b5-2,
    .home-main-bg-b5-3 {
      grid-row: span 6;
      grid-column: span 4;
    }

    .home-main-bg-b5-1 {
      border-right: 1px dashed $border-bg-line;
      border-bottom: 1px dashed $border-bg-line;
      border-radius: 0 0 $border-radius-bg 0;
    }

    .home-main-bg-b5-2 {
      grid-column: span 4;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .home-main-bg-b5-3 {
      border-left: 1px dashed $border-bg-line;
      border-bottom: 1px dashed $border-bg-line;
      border-radius: 0 0 0 $border-radius-bg;
    }

    .home-main-bg-b5-4 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-row: span 6;
      grid-column: span 12;
      overflow: hidden;

      h1 {
        font-size: 96px;
        font-family: $font-family-mer;
        color: $text-color-h;
        margin: 0;
        cursor: pointer;
      }

      p {
        font-size: 26px;
        font-family: $font-family-sha;
        color: $text-color-p;
        width: 60%;
        text-align: center;
        line-height: 1.2em;
      }
    }
  }

  .home-main-avatar {
    position: relative;
    min-width: 140px;
    width: 140px;
    height: 140px;
    background: url('@/assets/images/avatar.png') no-repeat center center;
    background-size: 85%;
    border-radius: $border-radius-circle;
    box-shadow: 0 0 0 2px $border-color-white;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid $border-color-light;
      border-radius: $border-radius-circle;
    }
  }

  .home-main-bg-b7 {
    grid-row: span 2;
    grid-column: span 24;
    border-top: 1px dashed $border-bg-line;
    border-bottom: 1px dashed $border-bg-line;
  }

  .home-main-bg-b8,
  .home-main-bg-b9 {
    grid-row: span 4;
    grid-column: span 12;
  }

  .home-main-bg-b8 {
    position: relative;
    border-right: 1px dashed $border-bg-line;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(58%, -58%);
      width: 8px;
      height: 8px;
      background: $border-color-gray;
      border-radius: $border-radius-circle;
      box-shadow: 0 0 0 2px $border-color-white;
    }
  }

  .home-main-bg-b9 {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px;
    color: $text-color-p;
    font-size: $font-size-medium;
    text-transform: uppercase;
  }

  .home-main-dev {
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;

    i {
      width: 60px;
      border-bottom: 1px solid $border-bg-line;
      margin-right: 20px;
    }
  }

  .home-main-switch {
    display: flex;
    align-items: center;
    width: 100px;
    margin-left: 20px;

    cursor: pointer;

    p {
      margin-left: 10px;
      padding-bottom: 2px;
    }
  }
}
</style>
