<template>
  <div>
    <el-container>
    <el-header>
      <Login></Login>
    </el-header>
    <el-container>
      <el-aside style="width: 18%; margin-left: 3%">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <router-view>
        </router-view>
<!--        <el-footer>-->
<!--          <Footer></Footer>-->
<!--        </el-footer>-->
      </el-main>
      <el-aside style="right: 0 ;width: 18%;margin-right: 3%">
        <Menu></Menu>
      </el-aside>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import Login from "../components/Login";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {Login,Menu,Footer},
}
</script>

<style scoped>
/*容器css*/
html,body,#app,.el-container{
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.el-header {
  position: relative;
  width: 100%;
  height: 60px;
}
.el-aside {
  display: block;
  position: absolute;
  top: 60px;
  width: 10%;
  bottom: 0px;
  background-color: rgb(238, 241, 246);
}
.el-main {
  position: absolute;
  height: 90%;
  left: 21%;
  right: 21%;
  top: 60px;
  bottom: 0;
}
/*.el-footer{*/
/*  position: relative;*/
/*  width: 100%;*/
/*  height: 60px;*/
/*  bottom: -100px;*/
/*}*/
</style>
