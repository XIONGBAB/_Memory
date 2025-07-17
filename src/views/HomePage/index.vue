<template>
  <div class="container">
    <div class="bg-gray">
      <div class="home-box">
        <div class="home-item-b1"></div>
        <div class="home-item-b2 home-item-circle"></div>
        <div class="home-item-b3"></div>
        <div class="home-item-b4"></div>
        <div class="home-item-b5 home-item-circle">
          <div class="home-item-b5-1"></div>
          <div class="home-item-b5-2">
            <div class="home-item-avatar"></div>
          </div>
          <div class="home-item-b5-3"></div>
          <div class="home-item-b5-4">
            <h1 @click="goToHome">
              Hi, I'm XIONGBAB.
            </h1>
            <p>
              I am an amateur developer and learning programming is my hobby. At
              present, I have learned HTML, CSS, Javascript, and Vue3, but of
              course, this is still in the learning stage. If you can, you can
              provide me with some guidance on optimization on the website I
              have written. Thank you!
            </p>
          </div>
        </div>
        <div class="home-item-b6"></div>
        <div class="home-item-b7"></div>
        <div class="home-item-b8"></div>
        <div class="home-item-b9">
          <div class="home-item-dev">
            <i></i>
            <p>development time June 6th, 2025</p>
          </div>
          <div class="home-item-switch" @click="toggleDark()">
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
import { useDark, useToggle } from '@vueuse/core';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const router = useRouter();
function goToHome() {
  router.push('/doc');
}

const changeTheme = computed(() =>
  isDark.value ? 'var(--bg-black)' : 'var(--bg-white)'
);
const changeColor = computed(() =>
  isDark.value ? 'var(--text-white)' : 'var(--text-black)'
);
const bgColor = computed(() =>
  isDark.value ? 'var(--bg-transparent)' : 'var(--bg-gray)'
);



</script>

<style scoped lang='scss'>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;

  .bg-gray {
    width: inherit;
    height: inherit;
    background: v-bind(bgColor);
    border-radius: $bd-radius-xl;
    padding: $spacing-2xl;
      transition: all 0.3s ease-in-out;
  }
  .home-box {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(24, 1fr);
    background-color: v-bind(changeTheme);
    border-radius: $bd-radius-xl;
  }
}
.home-item-circle {
  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-58%, 58%);
    width: 8px;
    height: 8px;
    background: $bd-gray;
    border-radius: $bd-radius-circle;
    box-shadow: $box-shadow-white;
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
    background: $bd-gray;
    border-radius: $bd-radius-circle;
    box-shadow: $box-shadow-white;
    z-index: 1;
  }
}
.home-item-b1,
.home-item-b2,
.home-item-b3 {
  grid-row: span 2;
  border-right: 1px dashed $bd-line;
  border-bottom: 1px dashed $bd-line;
  grid-column: span 4;
}
.home-item-b2 {
  position: relative;
  grid-column: span 16;
}
.home-item-b4,
.home-item-b5,
.home-item-b6 {
  grid-row: span 16;
  border-right: 1px dashed $bd-line;
  grid-column: span 4;
}
.home-item-b5 {
  position: relative;
  grid-column: span 16;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  .home-item-b5-1,
  .home-item-b5-2,
  .home-item-b5-3 {
    grid-row: span 6;
    grid-column: span 4;
  }

  .home-item-b5-1 {
    border-right: 1px dashed $bd-line;
    border-bottom: 1px dashed $bd-line;
    border-radius: 0 0 $bd-radius-xl 0;
  }

  .home-item-b5-2 {
    grid-column: span 4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .home-item-b5-3 {
    border-left: 1px dashed $bd-line;
    border-bottom: 1px dashed $bd-line;
    border-radius: 0 0 0 $bd-radius-xl;
  }

  .home-item-b5-4 {
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
      color: v-bind(changeColor);
      margin: 0;
      font-weight: 400;
      cursor: pointer;
      transition: color $transition-base;
    }
    p {
      font-size: 24px;
      font-family: $font-family-sha;
      color: $text-placeholder;
      width: 60%;
      text-align: center;
      line-height: 1.2em;
    }
  }
}
.home-item-avatar {
  position: relative;
  min-width: 140px;
  width: 140px;
  height: 140px;
  background: url('@/assets/images/avatar.png') no-repeat center center;
  background-size: 85%;
  border-radius: $bd-radius-circle;
  box-shadow: 0 0 0 2px $bd-white;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid $bd-light;
    border-radius: $bd-radius-circle;
  }
}
.home-item-b7 {
  grid-row: span 2;
  grid-column: span 24;
  border-top: 1px dashed $bd-line;
  border-bottom: 1px dashed $bd-line;
}
.home-item-b8,
.home-item-b9 {
  grid-row: span 4;
  grid-column: span 12;
}
.home-item-b8 {
  position: relative;
  border-right: 1px dashed $bd-line;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(58%, -58%);
    width: 8px;
    height: 8px;
    background: $bd-gray;
    border-radius: $bd-radius-circle;
    box-shadow: $box-shadow-white;
  }
}
.home-item-b9 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
  color: $text-placeholder;
  font-size: $text-base;
  text-transform: uppercase;
  overflow: hidden;
}
.home-item-dev {
  display: flex;
  align-items: center;
  white-space: nowrap;
  i {
    width: 60px;
    border-bottom: 1px solid $bd-line;
    margin-right: 20px;
  }
}
.home-item-switch {
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
</style>
