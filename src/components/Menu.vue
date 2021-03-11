<template>
  <el-menu :default-openeds="['1','2','3']">
    <router-link to="/HomeMain">
      <el-menu-item index="1-1"><i class="el-icon-message"></i>首页</el-menu-item>
    </router-link>
    <router-link to="/zujian">
      <el-menu-item index="1-2"><i class="el-icon-menu"></i>关注</el-menu-item>
    </router-link>
    <router-link to="">
      <el-menu-item index="1-3"><i class="el-icon-s-custom"></i>消息</el-menu-item>
    </router-link>
    <router-link to="">
      <el-menu-item index="1-3"><i class="el-icon-setting"></i>设置</el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
.el-menu-item{
  text-align: center;
}
</style>
