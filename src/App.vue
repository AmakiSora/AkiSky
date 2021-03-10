<template>
  <div id="app">
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1','2','3']">
            <router-link to="/HomeMain">
              <el-menu-item index="1-1"><i class="el-icon-message"></i>选项1</el-menu-item>
            </router-link>
            <router-link to="/zujian">
            <el-menu-item index="1-2"><i class="el-icon-menu"></i>选项2</el-menu-item>
            </router-link>
            <el-menu-item index="1-3"><i class="el-icon-s-custom"></i>选项3</el-menu-item>
            <el-menu-item index="1-3"><i class="el-icon-setting"></i>选项4</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view>
            </router-view>
          </el-main>
        </el-container>
        <el-aside>aside
        </el-aside>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html,body,#app,.el-container{
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
body .el-scrollbar {
  overflow-x: hidden;
}
</style>
