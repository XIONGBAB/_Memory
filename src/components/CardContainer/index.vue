<template>
  <div class="card-container">
    <div class="card-container-text">
      <div class="card-container-information">
        <div class="card-container-logo">
          <svg
            width="45" height="45" t="1699148091125" class="icon" viewBox="0 0 1024 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3528"
          ><path d="M116.7 63.8l71.9 806.9 322.8 89.6 323.7-89.8 72.1-806.7H116.7z m634 263.9H372l9 101.3h360.7l-27.2 303.8-203 56.3-202.7-56.3-13.9-155.4h99.4l7.1 79 110.2 29.7 0.3-0.1L622 656.3 633.5 528h-343l-26.7-299.2h495.7l-8.8 98.9z" fill="#E44D26" p-id="3529" /></svg>
          <div class="card-container-title">
            Html
          </div>
        </div>
        <div class="card-container-introduce">
          <p>HTML（HyperText Markup Language）全称为超文本标记语言，是一种用于创建和组织网页结构及内容的描述性标记语言。HTML不是一种编程语言，它使用标签来描述网页中的元素，如文本、图片、链接、表格等，并定义这些元素的显示方式。</p>
        </div>
      </div>
      <div class="card-container-main">
        <el-card shadow="hover">
          <dlv class="card-container-style">
            <i style="--i:20px;--color:#FF0000"></i>
            <i style="--i:35px;--color:#32CD32"></i>
            <i style="--i:50px;--color:#FFA500"></i>
          </dlv>
          <div class="card-container-content">
            <h2 class="c-content-h2">
              制作项目
            </h2>
            <p>cont</p>
          </div>
        </el-card>
      </div>
      <div class="card-container-empty"></div>
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
.card-container-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  .card-container-logo {
    display: flex;
    font-size: 40px;
    font-weight: 700;
    align-items: center;
    color: $text-primary;
    .card-container-title {
      margin-left: 10px;
    }
  }
  .card-container-introduce {
    color: $text-color-p;
    font-size: 14px;
    width: 100%;
    min-width: 750px;
    text-indent: 2em;
    text-align: justify;
    @include ellipsis-more;
  }
}
.card-container-main {
  position: relative;
  .card-container-style {
    i {
      position: absolute;
      top: 10px;
      left: var(--i);
      width: 10px;
      height: 10px;
      border-radius: $bd-radius-circle;
      background-color: var(--color);
    }
  }
  .card-container-content {
    margin-top: 20px;
    font-size: 14px;
    .c-content-h2 {
      position: relative;
      &::before {
        position: absolute;
        top: 7px;
        left: 0;
        content: '';
        display: block;
        width: 5px;
        height: 20px;
        background-color: $text-placeholder;
      }
      padding-left: 20px;
    }
  }
}
.card-container-empty {
  width: 100%;
  height: 50px;
}
</style>
