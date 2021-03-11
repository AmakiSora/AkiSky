<template>
<div>
  <el-button type="text" @click="centerDialogVisible = true">登录</el-button>
  <el-dialog :visible.sync="centerDialogVisible" width="30%" :before-close="handleClose" center>
    <div class="block"><el-avatar style="display: block;margin:0 auto;" :size="50" :src="circleUrl"></el-avatar></div>
    <p></p>
    <el-input placeholder="账号" v-model="username" clearable></el-input>
    <p></p>
    <el-input placeholder="密码" v-model="password" show-password></el-input>
    <p></p>

    <el-checkbox v-model="checked">记住我</el-checkbox>
    <el-link type="primary"style="float: right" :underline="false">忘记密码?</el-link>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false" style="width:50%;margin-bottom:15px;">登录</el-button>
  </span>
  </el-dialog>
</div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      centerDialogVisible: false,
      username: '',
      password: '',
      checked: false
    };
  },
  methods: {
    handleClose(done) {
          done();
    }
  }
}
</script>

<style scoped>

</style>
