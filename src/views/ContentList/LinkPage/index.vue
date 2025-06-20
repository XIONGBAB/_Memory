<template>
  <div class="link--page">
    <div ref="containerRef" class="cot-container">
      <el-card id="part1" shadow="hover">
        <div>3</div>
      </el-card>
      <el-card id="part2" shadow="hover">
        <div>2</div>
      </el-card>
      <el-card id="part3" shadow="hover"> 3 </el-card>
      <el-card id="part4" shadow="hover"> 4 </el-card>
    </div>
    <div class="cot-anchor" @click="handleClick">
      <el-affix :offset="60">
        <el-anchor :offset="60" type="underline">
          <el-anchor-link href="#part1"> 1 </el-anchor-link>
          <el-anchor-link href="#part2"> 2 </el-anchor-link>
          <el-anchor-link href="#part3"> 3 </el-anchor-link>
          <el-anchor-link href="#part4"> 4 </el-anchor-link>
        </el-anchor>
      </el-affix>
    </div>
  </div>
</template>

<script setup lang="ts" name="LinkPage">
import { ref } from "vue";

const containerRef = ref<HTMLElement | null>(null);

function handleClick(e: MouseEvent) {
  e.preventDefault();
}
</script>

<style scoped lang="scss"></style>
