<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>资产：{{ money }}</h4>
    <button @click="updateMoney(10)">从子组件增加资产</button>
  </div>
</template>
<script setup lang="ts" name="Person4">
import { inject } from 'vue';
// 接收moneyContext
const { money, updateMoney } = inject('moneyContext', {
  money: 0,
  updateMoney: (_value: number) => {},
});
</script>

<style scoped lang="scss"></style>
