<template>
  <div class="aside-menu">
    <div class="aside-menu-top">
      <img class="aside-menu-top-logo" />
      <div class="aside-menu-top-title">
        <h2>XIONGBAB</h2>
        <p>A rookie who can write code</p>
      </div>
    </div>
    <div class="aside-search">
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
    <div class="aside-collapse scroll">
      <el-menu default-active="/data" unique-opened class="el-menu-vertical-demo" :collapse="isCollapse">
        <MenuTree :menu-list="menuStore.menuRoutes" />
      </el-menu>
    </div>
    <div class="aside-footer">
      <el-icon><Open /></el-icon>
      <span>Lights on</span>
    </div>
  </div>
</template>

<script setup lang='ts' name='AsideMenu'>
import { onMounted, ref } from 'vue';

import MenuTree from '@/components/MenuTree/index.vue';
import useMenuStore from '@/store/modules/menu';

// #region search start
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
  console.log(item);
}

// #endregion search end

onMounted(() => {
  // search
  links.value = loadAll();
});
</script>

<style scoped lang='scss'>
.aside-menu {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  padding: 10px;
  background: $bg-aside-gray;
  border-right: 1px solid $bd-color-light;
  box-shadow: 2px 0 5px rgba(145, 145, 145, 0.12);
  z-index: 1;
}
.aside-menu-top {
  width: 100%;
  flex: 0 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .aside-menu-top-logo {
    width: 40px;
    min-width: 40px;
    min-height: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('@/assets/images/avatar.png') no-repeat center;
    background-size: cover;
    margin-right: 10px;
  }
  .aside-menu-top-title {
    display: flex;
    flex-direction: column;
    @include ellipsis();
    h2 {
      margin: 0;
      font-family: $font-family-pla;
      font-weight: 400;
    }
    p {
      margin: 0;
      color: $text-aside-gray;
      font-family: $font-family-ari;
    }
  }

  .aside-search {
    width: 100%;
    flex: 0 0 40px;
  }
}
.aside-footer {
  width: 100%;
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: $bd-test;
  color: $text-aside-gray;
  .el-icon {
    font-size: 18px;
  }
  span {
    margin-left: 10px;
    color: $text-aside-gray;
    font-size: 14px;
  }
}

// #region search start
:deep(.el-autocomplete) {
  --el-border-radius-base: 0.48rem;
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
// #endregion search end
</style>
