<template>
  <div class="infinite-list-wrapper">
    <div
      v-loading="loading"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
      style="overflow: auto;height: 1000px">
        <el-container class="fa-border" v-for="(i,index) in items" :key="i.NO" style="background: #ffffff">
          <el-aside style="width: 50px">
            <div class="block">
              <el-avatar :size="50" :src="i.avatarURL"></el-avatar></div>
          </el-aside>
          <el-container>
            <el-header style="height: 50px;">
              <el-button :type=i.btnCss  size="medium" style="float: right" plain @click="follow(i.id,index)">+关注</el-button>
              <a class="DIYName">{{i.name}}</a>
              <h1 class="DIYTime">{{i.uploadTime}}</h1>
            </el-header>
            <el-main>
              <p class="diyP">{{i.content}}</p>
              <el-link><i class="fa fa-paper-plane-o"></i>转发</el-link>
              <el-link><i class="el-icon-chat-dot-round"></i>评论</el-link>
              <el-link><i class="fa fa-heart-o"></i>点赞</el-link>
            </el-main>
          </el-container>
        </el-container>
    </div>
    <p style="text-align: center" v-if="loading">加载中...</p>
    <p style="text-align: center" v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
import {formatDate} from "../utils/date";
import {getRequest, postRequest} from "../utils/api";

export default {
  name: "MainDynamicContent",
  data () {
    return {
      items: [
        {
          NO: '',
          id: 'id',
          name: '用户名',
          content: '内容',
          uploadTime: '时间',
          avatarURL: '',
          btnCss: 'primary'
        }
      ],
      page_size: 5,//每次加载条数
      page: 1,//请求起始位置
      total: 30,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.items.length >= this.total
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.loading = true
      this.page=this.page + this.page_size
      setTimeout(() => {

        getRequest('/notLogin/QueryRangeDynamic',{page: this.page, page_size: this.page_size}).then(res=>{
          res.data.forEach(item => {
            item.uploadTime=formatDate(new Date(item.uploadTime),'yyyy-MM-dd hh:mm')
            item.btnCss='primary'
            this.items.push(item)
          })
        })
        //todo: 滚动条外移(与容器高度有关)
        this.loading = false
      }, 2000)
    },
    follow(id,NO){
      //todo: 未登录跳转登录模态框
      // if(sessionStorage.getItem("id")==null){
      //   console.log(11111111)
      // }else {
      //   getRequest('/focus/'+id).then(res=>{})
      // }
      getRequest('/follow/'+id).then(res=>{
        if (res.data===1){
          this.items[NO].btnCss = 'info'
        }
      })
    },
    unfollow(id,NO){
      getRequest('/unfollow/'+id).then(res=>{
        if (res.data===1){
          this.items[NO].btnCss = 'primary'
        }
      })
    }
  },
  mounted(){
    getRequest('/notLogin/QueryRangeDynamic',{page: 1, page_size: 6}).then(res=>{
      for (let i=0;i<res.data.length;i++){
        res.data[i].uploadTime=formatDate(new Date(res.data[i].uploadTime),'yyyy-MM-dd hh:mm')
        res.data[i].btnCss='primary'
      }
      this.items=res.data
    })
    // (res=>(this.items=res.data))
  }

}
</script>

<style scoped>
.infinite-list-wrapper{
  width:100%;
  margin: 0;
}
.el-container{
  margin: 15px;
  border-radius: 20px;
}
.el-aside {
  margin-left: 10px;
  margin-top: 10px;
  left: 0;
  right: 50px;
  top: 60px;
  bottom: 600px;
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 0;
}
.DIYTime{
  line-height: 1.7em;
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  font-size: 12px;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  word-break: break-word;
  outline: none;
  text-decoration: none;
  color: #99a2aa;
  transition: color 0.3s ease;
}
.DIYName{
  -webkit-box-direction: normal;
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  font-size: 16px;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: #222;
}
.router-link-active{
text-decoration: none;
}
a{
  text-decoration: none;
}
</style>
