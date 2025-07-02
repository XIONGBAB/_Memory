<template>
  <div class="content-main-page">
    <div ref="containerRef" class="c-card-left">
      <div class="c-card-title">
        <slot name="svg"></slot>
      </div>
      <div class="c-card-describe">
        <slot name="describe"></slot>
      </div>
      <div class="c-card-content">
        <slot name="content"></slot>
        <div class="c-card-lef-empty"></div>
      </div>
    </div>
    <div class="c-card-anchor" @click="handleClick">
      <el-anchor type="underline" :offset="120" :duration="1000">
        <el-anchor-link
          v-for="link in data"
          :key="link.id"
          :href="`#part${link.id}`"
        >
          {{ link.h2 }}
        </el-anchor-link>
      </el-anchor>
    </div>
    <el-backtop :right="60" :bottom="80">
      <el-icon><Position /></el-icon>
    </el-backtop>
  </div>
</template>

<script setup lang="ts" name="CardContainer">
import Prism from 'prismjs';
import { onMounted, onUpdated, ref } from 'vue';

defineProps(['data']);

const containerRef = ref<HTMLElement | null>(null);
function handleClick(e: MouseEvent) {
  e.preventDefault();
}

onMounted(() => {
  Prism.highlightAll(); //  prism js
});
onUpdated(() => {
  Prism.highlightAll(); //  prism js
});
</script>

<style lang="scss">
.content-main-page {
  position: relative;
  display: flex;
  width: 1280px;
  height: 100%;
  min-width: 750px;
  .c-card-left {
    flex: 1 1 0;
    height: 100%;
    min-width: 0;
  }
  .c-card-anchor {
    flex: 0 0 220px;
    margin: 0 20px 0 60px;
    position: sticky;
    top: 140px;
    right: 0;
    max-height: calc(100vh - 100px - 180px);
    overflow-y: scroll;
    scrollbar-width: none;
    transition: all 0.3s ease-in-out;
    border: 1px solid transparent;
    font-size: 16px;
    .el-anchor__list {
      @include ellipsis();
    }
    &:hover {
      scrollbar-width: thin;
    }
  }
}
.c-card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 46px;
    color: $text-color-h;
    margin: 0;
    padding-left: 10px;
  }
}
.c-card-describe {
  p {
    display: block;
    width: 100%;
    font-size: 14px;
    color: $text-color-p;
    text-indent: 2em;
    text-align: justify;
    line-height: 1.8em;
  }
}
.c-card-content {
  font-size: 16px;
  .el-card {
    margin-top: 60px;
    padding: 0 20px;
    color: $text-regular;
    font-family: $font-family-rob;
    a {
      font-size: 16px;
    }
  }
  h2 {
    position: relative;
    padding-left: 15px;
    font-size: 22px;
    color: $text-color-h;
    font-family: $font-family;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: $text-placeholder;
    }
  }
  p {
    font-weight: 700;
    margin-top: 30px;
    color: $text-regular;
    font-family: $font-family;
  }
  ul li {
    margin-top: 6px;
    text-align: justify;
  }
  table {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(90, 90, 90);
    border-collapse: collapse;
    margin: 20px 0;

    th {
      flex-grow: 1;
      background-color: #474747;
      color: #fff;
      line-height: 2em;
      padding-left: 10px;
    }

    tr,
    td {
      border: 1px solid #aaa;
      padding: 5px 10px;
    }
    tr:nth-child(even) {
      background-color: #f5f5f5;
    }
  }
}
.c-card-lef-empty {
  width: 100%;
  height: 60px;
}
.el-backtop {
  transition: all 0.3s ease-in-out;
  .el-icon {
    margin-top: 3px;
    transform: rotate(-45deg);
  }
  &:hover {
    transform: scale(1.2);
    background: none;
  }
}

//code theme
pre:not(.pre) {
  font-size: 16px;
  border-radius: 6px;

  code {
    display: inline-block;
    padding-bottom: 20px;
    position: relative;
    top: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    background: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    left: 15px;
    transform: translate(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    background: sandybrown;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    left: 30px;
    transform: translate(-50%);
  }

  code:first-child {
    &::after {
      content: '';
      position: absolute;
      background: limegreen;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      top: -22px;
      left: -16px;
      transform: translate(-50%);
    }
  }
}

div.code-toolbar > .toolbar > .toolbar-item {
  font-size: 18px;
  color: #fff;
  margin: 0 8px;
}
</style>
