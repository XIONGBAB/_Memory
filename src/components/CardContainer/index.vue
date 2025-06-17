<template>
  <div class="card-container">
    <div class="card-container-text">
      <el-card shadow="hover">
        Always
      </el-card>
      <div class="empty"></div>
    </div>
    <div class="card-container-anchor">
      <el-anchor type="underline">
        <el-anchor-link v-for="link in 10" :key="link">
          {{ link }}
        </el-anchor-link>
      </el-anchor>
    </div>
  </div>
</template>

<script setup lang='ts' name='CardContainer'>

</script>

<style scoped lang='scss'>
.card-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .card-container-text {
    flex: 1;
    min-width: 750px;
  }
  .empty {
    width: 100%;
    height: 50px;
  }
  .card-container-anchor {
    flex: 0 0 240px;
    margin-left: 60px;
    position: sticky;
    top: 0;
    right: 0;
    padding-bottom: 30px;
    overflow-y: auto;
    & {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE/Edge */
    }
    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari */
    }
  }
}
</style>
