<template>
  <div class="headerDIY">
    <div class="header-content">
      <div class="header-left">
        <ul class="header-ul">
          <li class="header-li"><router-link to="/Home"><img src="/static/image/akiSkyHeader.png" style="width: 100px;display: flex" ></router-link></li>
          <li class="header-li"><Login></Login></li>
          <li class="header-li"><router-link to="/Home"><p><a class="header-a">热门</a></p></router-link></li>
          <li class="header-li"><router-link to="/Home"><p><a class="header-a">推荐</a></p></router-link></li>
          <li class="header-li"><router-link to="/Home"><p><a class="header-a">排行榜</a></p></router-link></li>
          <li class="header-li"><router-link to="/Blog"><p><a class="header-a">博客</a></p></router-link></li>
        </ul>
      </div>
      <div class="header-middle">
        <div class="header-search">
          <form>
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </form>
        </div>
      </div>
      <div class="header-right">
        <div>
          <ul class="header-ul">
            <li class="header-li"><router-link to="/Home" v-if="avatarURL">
              <el-popover
              placement="bottom"
              width="200"
              trigger="hover">
                <div class="h-table">
                  <router-link to="/logout">
                    <div class="h-btn">登出</div>
                  </router-link>
                  <router-link to="/logout">
                    <div class="h-btn">登出1</div>
                  </router-link>
                  <router-link to="/logout">
                    <div class="h-btn">登出2</div>
                  </router-link>
                </div>
                <router-link to="/logout">
                  <div class="h-btn">登出</div>
                </router-link>
              <el-avatar :size="40" :src="avatarURL" style="display: flex" slot="reference"></el-avatar>
            </el-popover>
              </router-link></li>
            <li class="header-li"><router-link to="/Home"><p><a class="header-a">消息</a></p></router-link></li>
            <li class="header-li"><router-link to="/Home"><p><a class="header-a">动态</a></p></router-link></li>
            <li class="header-li"><router-link to="/Home"><p><a class="header-a">收藏</a></p></router-link></li>
            <li class="header-li"><router-link to="/Home"><p><a class="header-a">历史</a></p></router-link></li>
            <li class="header-li"><router-link to="/Home"><p><a class="header-a">创作中心</a></p></router-link></li>
            <li class="header-li"><router-link to="/Home"><p><a class="header-a">投稿</a></p></router-link></li>
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
  components: {Login},
  data(){
    return{
      input3:"",
      avatarURL: sessionStorage.getItem("avatarURL")
    }
  }
}
</script>

<style scoped>
.headerDIY{
  background: white;
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
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: #505050;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
  line-height: 30px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  height: 36px;
  display: flex;
  align-items: center;
}
.header-li{
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: #505050;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
  line-height: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-right: 12px;
}
.header-a{
  color: #505050;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  touch-action: manipulation;
  box-sizing: border-box;
  text-decoration: none;
  transition: color .3s;
  font-size: 14px;
  /*text-shadow: 0 1px 1px rgba(0,0,0,.3);*/
  line-height: 32px;
  white-space: nowrap;
  display: flex;
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
.header-search{
  color: #222;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  line-height: 30px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
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
.input-with-select{
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 34px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: #999;
  font-size: 14px;
  line-height: 34px;
  transition: all 0.2s;
}
.h-table{
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: #606266;
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  text-align: inherit;
  font-style: normal;
  margin: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #F4F4F4;
  padding: 7px 0;
}
.h-btn{
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  text-align: inherit;
  background-color: transparent;
  touch-action: manipulation;
  font-style: normal;
  margin: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  outline: none;
  box-sizing: border-box;
  text-decoration: none;
  color: #212121;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease;
  padding: 8px 23px;
}
</style>
