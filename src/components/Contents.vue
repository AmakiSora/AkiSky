<template>
  <div class="contentDIY">
<!--    <div class="background"></div>-->
    <div class="content-container">
      <div class="content-home">
        <div class="left-panel">
            <div class="Infinite-roll">
              <el-menu>
                <el-menu-item>123</el-menu-item>
                <el-menu-item>123</el-menu-item>
                <el-menu-item>123</el-menu-item>
              </el-menu>
            </div>
        </div>
        <div class="center-panel">
          <MainBlogInput></MainBlogInput>
          <MainBlogContent></MainBlogContent>
        </div>
        <div class="right-panel">
          <el-menu>
            <el-menu-item>123</el-menu-item>
            <el-menu-item>123</el-menu-item>
            <el-menu-item>123</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <el-backtop><i class="fa fa-angle-up"></i></el-backtop>
  </div>
</template>

<script>
import MainBlogContent from "./MainBlogContent";
import MainBlogInput from "./MainBlogInput";
export default {
name: "Contents",
  components: {MainBlogInput, MainBlogContent}
}
</script>

<style scoped>
.contentDIY{
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #222;
  font-size: 14px;
  margin: 0;
  padding: 0;
  width: 100%;

}
.background{
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #222;
  font-size: 14px;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(/static/image/image_header.jpg);
  background-size: cover;
  background-position: center;
}
.content-container{
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #222;
  font-size: 14px;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 8px;
}
.content-home{
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #222;
  font-size: 14px;
  padding: 0;
  width: 1160px;
  margin: 0 auto;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  position: relative;
}
.left-panel{
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #222;
  font-size: 14px;
  margin: 0;
  padding: 0;
  width: 244px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.center-panel{
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #222;
  font-size: 14px;
  -webkit-box-direction: normal;
  padding: 0;
  width: 632px;
  margin: 0 8px;
}
.right-panel{
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #222;
  font-size: 14px;
  margin: 0;
  padding: 0;
  width: 268px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.Infinite-roll{
  font-size: 14px;
  -webkit-box-direction: normal;
  margin: 0;
  padding: 0;
  -webkit-box-flex: 1;
  flex: 1;
  min-height: 969px;
}
.el-menu{
  background: #c7e2f9;
  border-radius: 20px;
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #222;
  font-size: 14px;
  -webkit-box-direction: normal;
  margin: 0;
  padding: 0;
  z-index: 1;
  position: sticky;
  top: 0px;

}
.el-menu-item{
  border-radius: 20px;
}
</style>
