<template>
  <div class="loginPage">
    <div class="card">

        <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="text-center" action="/login" method="post">
          <div class="loginImg">
            <img src="static/image/akiSkyHeader.png">
          </div>
<!--          <div class="loginTitle">请登录您的账号</div>-->
<!--           <p v-if="tips!==''" style="text-align: center ;color: red">{{tips}}</p>-->
          <el-form-item prop="username">
            <el-input name="username" v-model="loginForm.username" placeholder="帐号" clearable></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input name="password" v-model="loginForm.password" placeholder="密码" show-password></el-input>
          </el-form-item>
          <div style="text-align: center">
            <el-button @click="submitLogin" type="primary">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data(){
    return {
      loginForm:{
        username: '',
        password: '',
      },
      rules:{
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitLogin(){
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return;
        const params = new URLSearchParams();
        params.append('username', this.loginForm.username);
        params.append('password', this.loginForm.password);
        sessionStorage.setItem("username",this.loginForm.username)
        axios.post('/login', params.toString())
          .then(res=>{
            if (res===401){
              this.tips = '账号或密码错误！'
              sessionStorage.clear()
            }else if(res.code===200){
              console.log(res.code)
              this.tips = ''
              this.DialogVisible = false
              sessionStorage.setItem("token",res.token)
              this.$router.push({path:'/MainDynamicContent',query:{setid:123456}});
            }
          })
      })
    },
    PopUp(){
      this.DialogVisible = true
    }

  }
}
</script>

<style scoped>
.loginPage{
  background: #a2cbf4;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card{
  width: 450px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f8fa;
  border-radius: 20px;
}
.loginImg{

}
.loginTitle{
  text-align: center;
  margin: 20px;
}
.el-input{

}
.el-button{
  margin-bottom: 30px;
  width: 80%;
  left: 10%;
}
</style>
