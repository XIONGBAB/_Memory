<template>
  <div class="aside" :class="{ active: isCollapse }">
    <div class="aside-menu-top">
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
          fill=""
          p-id="13341"
        />
        <path
          d="M661.333333 341.333333h-384c-11.946667 0-21.333333-9.386667-21.333333-21.333333s9.386667-21.333333 21.333333-21.333333h384c11.946667 0 21.333333 9.386667 21.333334 21.333333s-9.386667 21.333333-21.333334 21.333333z m-384 85.333334h341.333334c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333h-341.333334c-11.946667 0-21.333333-9.386667-21.333333-21.333333s9.386667-21.333333 21.333333-21.333333z m0 128h170.666667c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333h-170.666667c-11.946667 0-21.333333-9.386667-21.333333-21.333333s9.386667-21.333333 21.333333-21.333333z"
          fill=""
          p-id="13342"
        />
        <path
          d="M960 810.666667c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333H853.333333v85.333334h106.666667c11.946667 0 21.333333 9.386667 21.333333 21.333333s-9.386667 21.333333-21.333333 21.333333H853.333333v21.333334c0 11.946667-9.386667 21.333333-21.333333 21.333333s-21.333333-9.386667-21.333333-21.333333v-322.133334c-72.106667-10.24-128-72.106667-128-147.2 0-82.346667 66.986667-149.333333 149.333333-149.333333s149.333333 66.986667 149.333333 149.333333c0 75.093333-55.893333 136.96-128 147.2V810.666667h106.666667z m-26.88-277.333334a101.12 101.12 0 0 0-101.546667-101.12c-55.893333 0-101.546667 45.226667-101.546666 101.12s45.226667 101.546667 101.546666 101.546667a101.802667 101.802667 0 0 0 101.546667-101.546667z"
          fill="#CC8752"
          p-id="13343"
        />
      </svg>
      <div class="aside-menu-top-title">
        <h2>XIONGBAB丶</h2>
        <p>A rookie who can write code</p>
      </div>
      <div
        class="aside-menu-top-toggle"
        :class="{ active: isCollapse }"
        @click="changeMenu"
      >
        <el-icon><ArrowRight /></el-icon>
      </div>
    </div>
    <div class="aside-menu-search">
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
    <div class="aside-menu-collapse">
      <el-scrollbar>
        <el-menu
          default-active="/data"
          :collapse="isCollapse"
          unique-opened
          class="el-menu-vertical-demo aside-menu-collapse"
        >
          <MenuTree :menuList="menuStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="aside-menu-footer" @click="changeLights">
      <el-icon><component :is="textChange ? Open : TurnOff" /></el-icon>
      <span class="aside-menu-footer-text">{{
        textChange ? "Lights on" : "Lights off"
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts" name="AsideMenu">
import { Open, TurnOff } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import useMenuStore from "@/store/modules/menu";
// import MenuTree from "@/views/DocumentPage/AsideMenu/MenuTree/index.vue";

// #region btn click change width
const menuStore = useMenuStore();
const isCollapse = ref<boolean>(false);
const textChange = ref<boolean>(true);

function changeLights() {
  textChange.value = !textChange.value;
}
function changeMenu() {
  menuStore.toggleCollapse(); // 直接调用无需打印返回值
  isCollapse.value = menuStore.isCollapse;
}
// #endregion btn click change width

// #region search
const state = ref("");
interface LinkItem {
  value: string;
  link: string;
}
const links = ref<LinkItem[]>([]);
function loadAll() {
  return [
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
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

onMounted(() => {
  // search
  links.value = loadAll();
});
</script>

<style scoped lang="scss">
.aside {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: var(--aside-max-width);
  height: 100vh;
  padding: 10px;
  background: $bg-aside-gray;
  transition: all 0.3s ease-in-out;
  border-right: 1px solid $bd-color-light;
  box-shadow: 2px 0 5px rgba(145, 145, 145, 0.12);
  z-index: 2;
  &.active {
    width: var(--aside-min-width);
    .aside-menu-top-title {
      transition: all 0.3s ease-in-out;
      opacity: 0;
    }
    .aside-menu-footer {
      .aside-menu-footer-text {
        opacity: 0;
        width: 0;
        padding: 0;
      }
    }
  }
  :deep(.el-input__prefix-inner) {
    padding-left: 10px;
    transition: padding $transition-base;
  }
  :deep(.el-input__inner) {
    padding-left: 10px;
    transition: padding $transition-base;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: auto;
  }
}
.aside-menu-top {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  .aside-menu-top-logo {
    flex: 0 0 36px;
    min-width: 20px;
    min-height: 20px;
    height: 40px;
    margin: 0 10px;
  }
  .aside-menu-top-title {
    flex: 1;
    overflow: hidden;
    h2,
    p {
      transition: all 0.3s ease-in-out;
      margin: 0;
      @include ellipsis;
    }
    h2 {
      min-width: 164px;
      font-family: $font-family-pla;
      font-weight: 400;
    }
    p {
      min-width: 164px;
      color: $text-aside-gray;
      font-family: $font-family-ari;
    }
  }
  .aside-menu-top-toggle {
    position: absolute;
    top: 70px;
    right: -22px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(226, 226, 226);
    background: rgb(240, 240, 240);
    border-radius: $bd-radius-circle;
    z-index: 10;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &.active {
      transform: rotate(180deg);
    }
  }
}
.aside-menu-search {
  flex: 0 0 40px;
  margin: 20px 0 10px 0;
  // transition: width $transition-base;
}
.aside-menu-collapse {
  flex: 1;
  height: 100%;
  border-radius: 5px;
  overflow-y: auto;
  .aside-menu-collapse {
    border-right: none;
  }
  :deep(.el-scrollbar__view) {
    height: 100%;
    overflow-x: hidden;
  }
}
.aside-menu-footer {
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $text-aside-gray;

  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background: #e6e6e6;
    border: $bd-radius-base;
  }
  .el-icon {
    font-size: 18px;
  }
  span {
    width: 50px;
    white-space: nowrap;
    color: $text-aside-gray;
    font-size: 14px;
    padding: 0 0 3px 10px;
    transition: all 0.3s ease-in-out;
  }
}

// #region search
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
