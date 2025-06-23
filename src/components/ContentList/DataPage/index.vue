<template>
  <div class="content-main-page">
    <div class="c-card">
      <div ref="containerRef" class="c-card-left">
        <div v-for="i in 100" :id="`part${i}`" :key="i">
          {{ i }}
        </div>
        <div id="part60">111</div>
      </div>
      <div class="c-card-anchor" @click="handleClick">
        <el-anchor type="underline" :offset="70">
          <el-anchor-link href="#part1" title="part1" />
          <el-anchor-link href="#part2" title="part2" />
          <el-anchor-link href="#part60" title="part60" />
        </el-anchor>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="DataPage">
import { ref } from "vue";

// const containerRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
function handleClick(e: MouseEvent) {
  e.preventDefault();
}
</script>

<style scoped lang="scss">
.c-card-anchor {
  position: fixed;
  top: 300px;
  right: 200px;
}
</style>
