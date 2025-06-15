<template>
  <div class="container">
    <div class="home-bg">
      <div class="home-bg-main">
        <div class="home-bg-main-b1"></div>
        <div class="home-bg-main-b2 home-bg-circle"></div>
        <div class="home-bg-main-b3"></div>
        <div class="home-bg-main-b4"></div>
        <div class="home-bg-main-b5 home-bg-circle">
          <div class="home-bg-main-b5-1"></div>
          <div class="home-bg-main-b5-2">
            <div class="home-main-avatar"></div>
          </div>
          <div class="home-bg-main-b5-3"></div>
          <div class="home-bg-main-b5-4">
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
        <div class="home-bg-main-b6"></div>
        <div class="home-bg-main-b7"></div>
        <div class="home-bg-main-b8"></div>
        <div class="home-bg-main-b9">
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
  </div>
</template>

<script setup lang='ts' name='HomePage'>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push('/doc');
}
</script>

<style scoped lang='scss'>
.home-bg {
  width: 100%;
  height: 100%;
  background: $bg-color-gray;
  border-radius: $bd-bg-radius;
  padding: $padding-base;
}

.home-bg-main {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  width: 100%;
  height: 100%;
  background-color: $bg-color-base;
  border-radius: $bd-bg-radius;

  .home-bg-circle {
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(-58%, 58%);
      width: 8px;
      height: 8px;
      background: $bd-color-gray;
      border-radius: $bd-radius-circle;
      box-shadow: $box-bg-shadow;
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
      background: $bd-color-gray;
      border-radius: $bd-radius-circle;
      box-shadow: $box-bg-shadow;
      z-index: 1;
    }
  }

  .home-bg-main-b1,
  .home-bg-main-b2,
  .home-bg-main-b3 {
    grid-row: span 2;
    border-right: 1px dashed $bd-bg-line;
    border-bottom: 1px dashed $bd-bg-line;
    grid-column: span 4;
  }

  .home-bg-main-b2 {
    position: relative;
    grid-column: span 16;
  }

  .home-bg-main-b4,
  .home-bg-main-b5,
  .home-bg-main-b6 {
    grid-row: span 16;
    border-right: 1px dashed $bd-bg-line;
    grid-column: span 4;
  }

  .home-bg-main-b5 {
    position: relative;
    grid-column: span 16;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);

    .home-bg-main-b5-1,
    .home-bg-main-b5-2,
    .home-bg-main-b5-3 {
      grid-row: span 6;
      grid-column: span 4;
    }

    .home-bg-main-b5-1 {
      border-right: 1px dashed $bd-bg-line;
      border-bottom: 1px dashed $bd-bg-line;
      border-radius: 0 0 $bd-bg-radius 0;
    }

    .home-bg-main-b5-2 {
      grid-column: span 4;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .home-bg-main-b5-3 {
      border-left: 1px dashed $bd-bg-line;
      border-bottom: 1px dashed $bd-bg-line;
      border-radius: 0 0 0 $bd-bg-radius;
    }

    .home-bg-main-b5-4 {
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
        font-weight: 400;
        cursor: pointer;
      }

      p {
        font-size: 24px;
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
    border-radius: $bd-radius-circle;
    box-shadow: 0 0 0 2px $bd-color-white;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid $bd-color-light;
      border-radius: $bd-radius-circle;
    }
  }

  .home-bg-main-b7 {
    grid-row: span 2;
    grid-column: span 24;
    border-top: 1px dashed $bd-bg-line;
    border-bottom: 1px dashed $bd-bg-line;
  }

  .home-bg-main-b8,
  .home-bg-main-b9 {
    grid-row: span 4;
    grid-column: span 12;
  }

  .home-bg-main-b8 {
    position: relative;
    border-right: 1px dashed $bd-bg-line;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(58%, -58%);
      width: 8px;
      height: 8px;
      background: $bd-color-gray;
      border-radius: $bd-radius-circle;
      box-shadow: $box-bg-shadow;
    }
  }

  .home-bg-main-b9 {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px;
    color: $text-color-p;
    font-size: $font-size-medium;
    text-transform: uppercase;
    overflow: hidden;
  }

  .home-main-dev {
    display: flex;
    align-items: center;
    white-space: nowrap;
    i {
      width: 60px;
      border-bottom: 1px solid $bd-bg-line;
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
