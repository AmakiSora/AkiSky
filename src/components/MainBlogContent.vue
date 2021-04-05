<template>
  <div class="infinite-list-wrapper">
    <div
      v-infinite-scroll="load"
      infinite-scroll-distance="10"
      infinite-scroll-disabled="disabled">
        <el-container class="fa-border" v-for="i in items" :key="index">
          <el-aside style="width: 50px">
            <div class="block">
              <el-avatar :size="50" :src="i.avatarURL"></el-avatar></div>
          </el-aside>
          <el-container>
            <el-header style="height: 50px;">
              <a>{{i.name}}</a>
              <h1 class="diyP">{{i.uploadTime}}</h1>
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
import axios from "axios";

export default {
  name: "MainBlogContent",
  data () {
    return {
      items: [
        {
          name: '用户名',
          content: '内容',
          uploadTime: '时间',
          avatarURL: ''
        }
      ],
      itemPerLoad: 5,//每次加载条数
      pageIndex: 1,//请求页数
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      let self = this;
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    },
  },
  mounted(){
    axios.get('/notLogin/QueryAllDynamic',{
      params:{
        page: 1142,
        page_size: 2
      }
    }).then(res=>(this.items=res.data))
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
/*diyP为<p>的样式*/
.diyP{
  margin: 0;
  padding: 0 0 10px 0;
}
.router-link-active{
text-decoration: none;
}
a{
  text-decoration: none;
}
</style>
