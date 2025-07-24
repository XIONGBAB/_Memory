<template>
  <div class="container grid">
    <div class="aside grid">
      <div class="aside-top grid" style="overflow: hidden;">
        <div class="aside-top-icon">
          <svg
            t="1750147474497"
            class="icon aside-menu-top-logo"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="13340"
            width="36"
            height="36"
          >
            <path
              d="M896 234.666667V298.666667c0 11.946667-9.386667 21.333333-21.333333 21.333333S853.333333 310.613333 853.333333 298.666667V213.333333h-59.733333c-37.546667 0-68.266667-30.72-68.266667-68.266666V85.333333H170.666667c-23.466667 0-42.666667 19.2-42.666667 42.666667v768c0 23.466667 19.2 42.666667 42.666667 42.666667h533.333333c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333333V128c0-46.933333 38.4-85.333333 85.333334-85.333333h582.826666L896 184.32V234.666667z"
              fill="var(--svg-black)"
              p-id="13341"
            />
            <path
              d="M661.333333 341.333333h-384c-11.946667 0-21.333333-9.386667-21.333333-21.333333s9.386667-21.333333 21.333333-21.333333h384c11.946667 0 21.333333 9.386667 21.333334 21.333333s-9.386667 21.333333-21.333334 21.333333z m-384 85.333334h341.333334c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333h-341.333334c-11.946667 0-21.333333-9.386667-21.333333-21.333333s9.386667-21.333333 21.333333-21.333333z m0 128h170.666667c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333h-170.666667c-11.946667 0-21.333333-9.386667-21.333333-21.333333s9.386667-21.333333 21.333333-21.333333z"
              fill="var(--svg-black)"
              p-id="13342"
            />
            <path
              d="M960 810.666667c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333H853.333333v85.333334h106.666667c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333H853.333333v21.333334c0 11.946667-9.386667 21.333333-21.333333 21.333333s-21.333333-9.386667-21.333333-21.333333v-322.133334c-72.106667-10.24-128-72.106667-128-147.2 0-82.346667 66.986667-149.333333 149.333333-149.333333s149.333333 66.986667 149.333333 149.333333c0 75.093333-55.893333 136.96-128 147.2V810.666667h106.666667z m-26.88-277.333334a101.12 101.12 0 0 0-101.546667-101.12c-55.893333 0-101.546667 45.226667-101.546666 101.12s45.226667 101.546667 101.546666 101.546667a101.802667 101.802667 0 0 0 101.546667-101.546667z"
              fill="var(--svg-orange)"
              p-id="13343"
            />
          </svg>
        </div>
        <transition name="el-zoom-in-center">
          <div
            v-if="!isCollapse " class="aside-top-introduce"
          >
            <h2>{{ $t("doc.introduce") }}</h2>
            <p>{{ $t("doc.describe") }}</p>
          </div>
        </transition>
        <div
          class="aside-top-toggle"
          :class="{ active: isCollapse }"
          @click="toggleMenu"
        >
          <el-icon><ArrowRight /></el-icon>
        </div>
      </div>
      <div class="aside-search grid">
        <el-autocomplete
          v-model="state"
          clearable
          :fetch-suggestions="querySearchAsync"
          placeholder="Search "
          @select="handleSelect"
        >
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
          <template #loading>
            <el-icon class="is-loading">
              <svg class="circular" viewBox="0 0 20 20">
                <g
                  class="path2 loading-path"
                  stroke-width="0"
                  style="animation: none; stroke: none"
                >
                  <circle r="3.375" class="dot1" rx="0" ry="0" />
                  <circle r="3.375" class="dot2" rx="0" ry="0" />
                  <circle r="3.375" class="dot4" rx="0" ry="0" />
                  <circle r="3.375" class="dot3" rx="0" ry="0" />
                </g>
              </svg>
            </el-icon>
          </template>
        </el-autocomplete>
      </div>
      <div class="aside-menu">
        <el-scrollbar>
          <el-menu
            :collapse="isCollapse"
            default-active="/data"
            unique-opened
            class="el-menu-vertical-demo aside-menu-collapse"
          >
            <MenuTree :menuList="menuStore.menuRoutes" />
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="aside-toggle grid">
        <!-- <div class="aside-toggle-switch" @click="toggleTheme">
          <el-switch
            v-model="themeValue"
            inline-prompt
            style="
              --el-switch-on-color: rgba(218, 218, 218, 0.4);
              --el-switch-off-color: rgba(77, 77, 77, 0.4);
            "
            active-icon="Sunny"
            inactive-icon="Moon"
          />
        </div> -->
        <transition name="el-zoom-in-bottom">
          <div v-show="!isCollapse" class="aside-toggle-date">
            {{ value2 }}
          </div>
        </transition>
      </div>
    </div>
    <div class="main  ">
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">
          {{ i }}
        </li>
      </ul>
    </div>
    <!-- <NavBar />
    <AsideMenu />
    <ContentMain /> -->
  </div>
</template>

<script setup lang="ts" name="DocumentPage">
import { useDark, useToggle } from '@vueuse/core';
import dayjs from 'dayjs';
import { onMounted, ref } from 'vue';
import useMenuStore from '@/store/modules/menu';
import MenuTree from '@/views/DocumentPage/MenuTree/index.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

// 切换主题
function toggleTheme(e: MouseEvent) {
  const transition = document.startViewTransition(() => {
    toggleDark(); // 实际切换主题
  });
  transition.ready.then(() => {
    const x = e.clientX;
    const y = e.clientY;
    // 从点击点到窗口最远边缘的距离，这个距离即为圆的半径，用于确定一个圆形裁剪路径 (clip path) 的最大尺寸，以便覆盖整个视窗。
    // 勾股定理：a² + b² = c²
    const radius = Math.sqrt(
      Math.max(x, window.innerWidth - x) ** 2 + Math.max(y, window.innerHeight - y) ** 2
    ); // 一个数的平方根

    const clipPath = [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`];
    // 实现过渡的过程 circle
    document.documentElement.animate(
      {
        clipPath: isDark.value ? clipPath.reverse() : clipPath
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)'
      }
    );
  });
}

// menu variable
const menuWidth = ref('240px');
const menuStore = useMenuStore();
const menuCollapse = ref('219px');

// #region search
const state = ref('');
interface LinkItem {
  value: string;
  link: string;
}
const links = ref<LinkItem[]>([]);
function loadAll() {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' }
  ];
}
let timeout: ReturnType<typeof setTimeout>;
function querySearchAsync(queryString: string, cb: (arg: any) => void) {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 5000 * Math.random());
}
function createFilter(queryString: string) {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
}
function handleSelect(item: Record<string, any>) {
  return [item];
}
// #endregion search

// menu collapse
const isCollapse = ref<boolean>(false);
function toggleMenu() {
  menuStore.toggleCollapse();
  isCollapse.value = menuStore.isCollapse;
  if (isCollapse.value) {
    menuWidth.value = '84px';
    menuCollapse.value = '64px';
  }
  else {
    menuWidth.value = '240px';
    menuCollapse.value = '219px';
  }
}

// toggle Them button
const themeValue = ref(false);
// date format
const value2 = dayjs().format('YYYY-MM-DD');

//  main test
const count = ref(0);
function load() {
  count.value += 10;
}
// test

onMounted(() => {
  // search
  links.value = loadAll();
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
  grid-template-columns: v-bind(menuWidth) 1fr;
  transition: all $transition-base;
}
.aside {
  position: relative;
  height: 100vh;
  padding: 10px;
  grid-template-rows: 80px 60px 1fr 40px;
  border-right: 1px solid var(--bg-gray);
  .aside-top,
  .aside-search,
  .aside-toggle {
  }
  .aside-top {
    grid-template-columns: 60px 1fr;
  }
  .aside-top-icon {
    place-self: center;
  }
  .aside-top-introduce {
    align-self: center;
    h2 {
      color: $text-regular;
      font-family: $font-family-pla;
      font-weight: 400;
    }
    h2,
    p {
      margin: 0;
      @include ellipsis;
    }
    p {
      color: $text-assist;
      font-family: $font-family-ari;
    }
    // &.active {
    //   overflow: hidden;
    //   transition: all 0.3s ease-in-out;
    //   opacity: 0;
    // }
  }
  .aside-top-toggle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 80px;
    right: -12px;
    width: 24px;
    height: 24px;
    border: 1px solid var(--bg-gray);
    background: var(--bg-gray);
    border-radius: $bd-radius-circle;
    z-index: 10;
    color: black;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &.active {
      transform: rotate(180deg);
    }
  }
  .aside-search {
    align-self: end;
    width: v-bind(menuCollapse);
    transition: all $transition-base;
  }
  .aside-menu {
    margin: 10px 0;
    border-radius: 5px;
    overflow-y: auto;
    :deep(.el-scrollbar__view) {
      width: v-bind(menuCollapse);
      height: inherit;
      overflow-x: hidden;
      border: 1px solid var(--bg-gray);
      transition: all $transition-base;
    }
    .aside-menu-collapse {
      border-right: none;
    }
  }
  .aside-toggle {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    font-size: $text-base;
    color: $text-secondary;
  }
}

.main {
  width: 100%;
  min-width: 1200px;
  padding-left: 60px;
  // background-color: var(--bg-gray);
  .infinite-list {
    height: 100vh;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow-y: scroll;
  }
}
// .infinite-list {
//   width: 100%;
//   max-height: min-content;
//   padding: 0;
//   margin: 0;
//   list-style: none;
// }
// .infinite-list .infinite-list-item {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 900px;
//   background: var(--bg-white);
//   margin: 1px;
//   color: var(--el-color-primary);
// }
// .infinite-list .infinite-list-item + .list-item {
//   margin-top: 10px;
// }
// #region search
:deep(.el-input__prefix-inner) {
  padding-left: 10px;
  transition: padding $transition-base;
}
:deep(.el-input__inner) {
  padding-left: 10px;
  transition: padding $transition-base;
}
:deep(.el-autocomplete) {
  --el-border-radius-base: 18px;
}
.circular {
  display: inline;
  height: 30px;
  width: 30px;
  animation: loading-rotate 2s linear infinite;
}
.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-color-primary);
  stroke-linecap: round;
}
.loading-path .dot1 {
  transform: translate(3.75px, 3.75px);
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
}
.loading-path .dot2 {
  transform: translate(calc(100% - 3.75px), 3.75px);
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.4s;
}
.loading-path .dot3 {
  transform: translate(3.75px, calc(100% - 3.75px));
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 1.2s;
}
.loading-path .dot4 {
  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.8s;
}
@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes custom-spin-move {
  to {
    opacity: 1;
  }
}
// #endregion search
</style>
