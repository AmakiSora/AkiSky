<template>
<div>
  <a type="text" @click="PopUp"><a class="header-a">登录</a></a>
    <el-dialog :visible.sync="DialogVisible" width="370px" append-to-body="true" center>
      <div class="block">
        <el-avatar style="display: block;margin:0 auto;" :size="50" :src="circleUrl"></el-avatar>
      </div>
      <p></p>
      <p v-if="tips!==''" style="text-align: center ;color: red">{{tips}}</p>
      <el-input placeholder="账号" v-model="username" clearable></el-input>
      <p></p>
      <el-input placeholder="密码" v-model="password" show-password></el-input>
      <p></p>
      <el-checkbox v-model="checked">记住我</el-checkbox>
      <el-link type="primary" style="float: right" :underline="false">忘记密码?</el-link>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitLogin" style="width:50%;margin-bottom:15px;">登录</el-button>
      </span>
    </el-dialog>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      DialogVisible: false,
      username: '',
      password: '',
      checked: false,
      tips: ""
    };
  },
  methods: {
    submitLogin(){
      const params = new URLSearchParams();
      params.append('username', this.username);
      params.append('password', this.password);
      axios.post('/login', params.toString())
        .then(res=>{
          if (res==401){
            this.tips = '账号或密码错误！'
          }else if(res==233){
            console.log(res)
            this.tips = ''
            this.DialogVisible = false
          }
        })
    },
    PopUp(){
      this.DialogVisible = true
    }

  }
}
</script>

<style scoped>
.header-a{
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
  line-height: 32px;
  white-space: nowrap;
  display: flex;
}
</style>
