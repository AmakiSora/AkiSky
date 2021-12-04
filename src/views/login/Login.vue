<template>
  <div class="header">
    <h1>AkiSky</h1>
  </div>
  <div class="body">
    <el-card class="box-card">
      <div class="loginForm">
        <el-input v-model="loginForm.username" placeholder="帐号" clearable/>
        <el-input v-model="loginForm.password" placeholder="密码" show-password/>
        <el-button type="primary" @click.native.prevent="handleLogin" plain>登录</el-button>
      </div>
    </el-card>
  </div>


</template>

<script>
import {ref} from "vue";

export default {
  name: "Login",
  setup() {
    return {
      loginForm:{
        username: ref(''),
        password: ref(''),
      }
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods:{
    handleLogin() {
      //todo 登录逻辑
    },
  }
}
</script>

<style scoped>
.el-input {
  width: 266px;
  margin-bottom: 20px;
}
.el-button {
  width: 266px;
}

.body {
  flex-direction: column;
  display: flex;
  align-items: center;
}
.loginForm{
  flex-direction: column;
  display: flex;
  align-items: center;
}
.box-card{
  background: #f6f8fa;
  border-radius: 10px;
}

</style>