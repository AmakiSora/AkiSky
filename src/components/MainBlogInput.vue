<template>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>

<script>
export default {
  name: "MainBlogInput",
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.el-input{
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
