<template>
  <div class="stack">
    <div class="cot-container" ref="containerRef">
      <el-card shadow="hover" id="part1"></el-card>
      <el-card shadow="hover" id="part2">
        <div>2</div>
      </el-card>
      <el-card shadow="hover" id="part3">3</el-card>
      <el-card shadow="hover" id="part4"></el-card>
    </div>
    <div class="cot-anchor" @click="handleClick">
      <el-affix :offset="60">
        <el-anchor :offset="60" type="underline">
          <el-anchor-link href="#part1">1</el-anchor-link>
          <el-anchor-link href="#part2">2</el-anchor-link>
          <el-anchor-link href="#part3">3</el-anchor-link>
          <el-anchor-link href="#part4">4</el-anchor-link>
        </el-anchor>
      </el-affix>
    </div>
  </div>
</template>
<script setup lang="ts" name="StackPage">
import { ref } from "vue";
const containerRef = ref<HTMLElement | null>(null);

const handleClick = (e: MouseEvent) => {
  e.preventDefault();
};
</script>

<style scoped lang="scss">
.cot-container {
  flex: 1;
  height: 100%;
  .el-card {
    margin: 1.6rem 0;
  }
  .el-card:first-of-type {
    margin: 0;
  }
}
.cot-anchor {
  flex: 0 0 8rem;
  height: 100%;
  padding-left: 1.6rem;
}
</style>
