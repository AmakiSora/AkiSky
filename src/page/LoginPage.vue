<template>
  <div>
    <div class="loginImg">
      <img src="static/image/akiSkyHeader.png">
    </div>
    <div class="auth_left">
      <div class="card">
        <div class="card-body">
          <form class="text-center" action="/login" method="post">
            <div class="loginTitle">请登录您的账号</div>
            <p v-if="tips!==''" style="text-align: center ;color: red">{{tips}}</p>
            <el-input name="username" v-model="username" class="loginInput" placeholder="帐号" clearable></el-input>
            <label class="form-label">
            </label>
            <el-input name="password" v-model="password" class="loginInput" placeholder="密码" show-password></el-input>
<!--                 <label class="custom-control custom-checkbox">-->
<!--                   <input type="checkbox" name="remember" class="custom-control-input">-->
<!--                   <span class="custom-control-label">记住我</span>-->
<!--                 </label>-->
            <div style="text-align: center">
              <el-button @click="submitLogin" type="primary">登录</el-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data(){
    return {
      username: '',
      password: '',
      tips: ''
    };
  },
  methods: {
    submitLogin(){
      const params = new URLSearchParams();
      params.append('username', this.username);
      params.append('password', this.password);
      axios.post('/login', params.toString())
        .then(res=>{
          if (res===401){
            this.tips = '账号或密码错误！'
            sessionStorage.clear()
          }else if(res.code===200){
            console.log(res.code)
            this.tips = ''
            this.DialogVisible = false
            sessionStorage.setItem("name",res.data.name)
            sessionStorage.setItem("avatarURL",res.data.avatarURL)
            this.$router.push({path:'/Dynamic',query:{setid:123456}});
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
.auth_left{
  text-align: left;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 70vh;
  width: 400px;
  padding: 0 20px;
  margin: 0 auto;
}
.card{
  text-align: left;
  direction: ltr;
  display: flex;
  min-width: 0;
  word-wrap: break-word;
  background-color: #f6f8fa;
  background-clip: border-box;
  margin-bottom: 15px;
  transition: all 0.5s ease-in-out;
  border-radius: .55rem;
  position: relative;
  width: 100%;
}
.loginImg{
  text-align: center;
}
.loginTitle{
  text-align: center;
  margin: 20px;
}
.loginInput{
  width: 80%;
  left: 10%;
  margin-top: 10px;
  margin-bottom: 20px;
}
.el-button{
  margin-bottom: 30px;
  width: 80%;
  left: 10%;
}
</style>
