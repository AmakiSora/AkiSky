<template>
  <div class="ops-body">
    <div class="ops-header">接口列表</div>
    <div class="demo-collapse">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template #title>
            <el-tag class="ops-item-title">获取推特用户信息</el-tag>
          </template>
          <div>
            <el-form label-width="120px">
              <el-form-item label="接口地址">
                <el-input v-model="interface1.url"/>
              </el-form-item>
              <el-form-item label="请求体" prop="desc">
                <el-input autosize type="textarea" v-model="interface1.body"></el-input>
              </el-form-item>
              <el-form-item label="响应体" prop="desc">
                <el-input autosize type="textarea" v-model="interface1.response"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="sendRequest(interface1)">发送请求</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <el-tag class="ops-item-title">获取用户推文信息</el-tag>
          </template>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <el-tag class="ops-item-title">搜索用户推文信息</el-tag>
          </template>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <el-tag class="ops-item-title">批量更新用户信息</el-tag>
          </template>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template #title>
            <el-tag class="ops-item-title">更新多个用户推文</el-tag>
          </template>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template #title>
            <el-tag class="ops-item-title">获取图片到云端</el-tag>
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "ops",
  setup() {
    return {
      interface1: {
        url: '/twitter/autoGetUserInfo',
        body: '{' +
            '    "username": "aichan_nel",' +
            '    "to_db": true' +
            '}',
      },
    }
  },
  methods: {
    sendRequest(interfaceDate) {
      axios({
        method: 'post',
        baseURL: 'http://cyber.icarus-alpha.cn',
        url: interfaceDate.url,
        data: interfaceDate.body
      }).then(res => {
        console.log(res)
        console.log(res.data)
        interfaceDate.response = res.data
      })
    },
  }
}

</script>

<style scoped>
.ops-body {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
}

.ops-header {
  background: #c6e2ff;
  padding: 10px 10px 10px 10px;
  border-style: hidden;
  border-radius: 20px;
}

.ops-item-title {
  margin-left: 20px;
  border-style: hidden;
  border-radius: 10px;
}
</style>