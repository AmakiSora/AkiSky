<template>
  <div class="DynamicPage">
    <Header></Header>
    <div class="content-container">
      <div class="content-home">
        <div class="left-panel">
          <div class="left-info">
            <div class="left-info-header">
              <el-avatar :size="50" :src="avatarURL" slot="reference"></el-avatar>
              <p style="margin-left: 10px" v-text="username">???</p>
            </div>
            <div class="left-info-data">
              <div class="left-info-data-card">
                关注
              </div>
              <div class="left-info-data-card">
                粉丝
              </div>
              <div class="left-info-data-card">
                动态
              </div>
            </div>
            <div class="left-info-data">
              <div class="left-info-data-card" v-text="followNum">
                1
              </div>
              <div class="left-info-data-card" v-text="fansNum">
                1
              </div>
              <div class="left-info-data-card" v-text="dynamicNum">
                1
              </div>
            </div>

          </div>
          <div class="Infinite-roll">
            <el-menu>
              <router-link to="/MainDynamicContent" active-class="a"><el-menu-item>全部动态</el-menu-item></router-link>
              <router-link to="/MyDynamicContent"><el-menu-item>我的动态</el-menu-item></router-link>
            </el-menu>
          </div>
        </div>
        <div class="center-panel">
          <div class="dynamic-input">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button style="text-align: right">发布</el-button>
          </div>
          <router-view></router-view>
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
import Header from "../components/Header";
import {getRequest} from "../utils/api";
export default {
name: "Dynamic",
  components: {Header},
  data(){
    return{
      avatarURL:233,
      username:233,
      followNum:233,
      fansNum:233,
      dynamicNum:233,
    }
  },
  mounted(){
    getRequest('/getInfo/'+sessionStorage.getItem("username")).then(res=>{
      this.avatarURL = res.data.avatarURL
      this.username = res.data.name
      this.followNum = res.data.followNum
      this.fansNum = res.data.fansNum
      this.dynamicNum = res.data.dynamicNum
    })
  }
}
</script>

<style scoped>
.DynamicPage{
  color: #222;
  font-size: 14px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #a2cbf4;
}
.background{
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
  color: #222;
  font-size: 14px;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 8px;
}
.content-home{
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
  color: #222;
  font-size: 14px;
  -webkit-box-direction: normal;
  padding: 0;
  width: 632px;
  margin: 0 8px;
}
.right-panel{
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
  overflow: hidden;
  /*min-height: 969px;*/
}
.el-menu{
  background: #ffffff;
  border-radius: 10px;
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
.left-info{
  background: white;
  margin-bottom: 10px;
  border-radius: 10px;
}
.left-info-header{
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
}
.left-info-data{
  display: flex;
  text-align: center;
  margin: 10px;
}
.left-info-data-card{
  flex: 1;
}
.dynamic-input{
  margin: 10px;
}
</style>
