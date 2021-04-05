<template>
  <div class="headerDIY">
    <div class="header-content">
      <div class="header-left">
        <ul class="header-ul">
          <li class="header-li"><Login></Login></li>
          <li class="header-li">按钮</li>
          <li class="header-li">按钮</li>
          <li class="header-li">按钮</li>
          <li class="header-li">按钮</li>
          <li class="header-li">按钮</li>
        </ul>
      </div>
      <div class="header-middle">
        <div>
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="header-right">
        <div>
          <ul class="header-ul">
            <li class="header-li">按钮</li>
            <li class="header-li">按钮</li>
            <li class="header-li">按钮</li>
            <li class="header-li">按钮</li>
            <li class="header-li">按钮</li>
            <li class="header-li">按钮</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
export default {
name: "Header",
  components: {Login}
}
</script>

<style scoped>
.headerDIY{
  color: #222;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  position: relative;
  z-index: 1000;
  margin: 0;
  padding: 0;
  min-width: 999px;
  min-height: 56px;
}
.header-content{
  color: #222;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  padding: 10px 24px;
  line-height: 30px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
}
.header-left{
  color: #222;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  line-height: 30px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header-ul{
  color: #222;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  line-height: 30px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  height: 36px;
  display: flex;
  align-items: center;
}
.header-li{
  color: #222;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  line-height: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  margin-right: 12px;
}
.header-middle{
  color: #222;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  line-height: 30px;
  padding: 0;
  box-sizing: border-box;
  margin: 0 10px;
  width: 500px;
  transition: 0.3s width;
}
.header-right{
  color: #222;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  line-height: 30px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
}


</style>
