<template>
  <div class="content-main-page">
    <div ref="containerRef" class="c-card-left">
      <div class="c-card-title">
        <svg
          width="48" height="48" t="1699148091125" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3528"
        ><path d="M116.7 63.8l71.9 806.9 322.8 89.6 323.7-89.8 72.1-806.7H116.7z m634 263.9H372l9 101.3h360.7l-27.2 303.8-203 56.3-202.7-56.3-13.9-155.4h99.4l7.1 79 110.2 29.7 0.3-0.1L622 656.3 633.5 528h-343l-26.7-299.2h495.7l-8.8 98.9z" fill="#E44D26" p-id="3529" /></svg>
        <h1>Html</h1>
      </div>
      <div class="c-card-describe">
        <p>HTML（HyperText Markup Language）全称为超文本标记语言，是一种用于创建和组织网页结构及内容的描述性标记语言。HTML不是一种编程语言，它使用标签来描述网页中的元素，如文本、图片、链接、表格等，并定义这些元素的显示方式。</p>
      </div>
      <div class="c-card-lef-empty"></div>
    </div>
    <div class="c-card-anchor" @click="handleClick">
      <el-anchor type="underline" :offset="120">
        <el-anchor-link href="#part1" title="part1" />
        <el-anchor-link href="#part2" title="part2" />
        <el-anchor-link href="#part61" title="part61" />
      </el-anchor>
    </div>
  </div>
</template>

<script setup lang="ts" name="DataPage">
import { ref } from 'vue';

const containerRef = ref<HTMLElement | null>(null);
function handleClick(e: MouseEvent) {
  e.preventDefault();
}
</script>

<style scoped lang="scss">
.content-main-page {
  position: relative;
  display: flex;
  width: 1280px;
  height: 100%;
  min-width: 750px;
}
.c-card-left {
  flex: 1;
  height: 100%;
  .c-card-lef-empty {
    width: 100%;
    height: 60px;
  }
}
.c-card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 48px;
    color: $text-regular;
    margin: 0;
  }
}
.c-card-anchor {
  flex: 0 0 240px;
  margin: 0 20px 0 40px;
  position: sticky;
  top: 125px;
  right: 0;
  max-height: calc(100vh - 100px - 100px);
  overflow-y: auto;
  scrollbar-width: none;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  &:hover {
    scrollbar-width: thin;
  }
}
</style>
