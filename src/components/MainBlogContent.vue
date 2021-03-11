<template>
<!--  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">-->
<!--    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>-->
<!--  </ul>-->
  <div class="infinite-list-wrapper">
    <div
      v-infinite-scroll="load"
      infinite-scroll-distance="10"
      infinite-scroll-disabled="disabled">
      <div v-for="i in count">
        <el-container>
          <el-aside style="width: 50px">
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
          </el-aside>
          <el-container>
            <el-header>
              <a>AkiSky官方</a>
            </el-header>
            <el-main>
              <p>更新1.02版本</p>
            </el-main>
            <el-footer>
              <el-button>1</el-button>
              <el-button>1</el-button>
              <el-button>1</el-button>
              <div class="line"><div></div></div>
            </el-footer>
          </el-container>
        </el-container>
      </div>
    </div>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  name: "MainBlogContent",
  data () {
    return {
      count: 5,
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
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }

}
</script>

<style scoped>
.infinite-list-wrapper{
  width:100%;
  height:800px;
}
.el-aside {
  margin-top: 10px;
  left: 0;
  right: 50px;
  top: 60px;
  bottom: 600px;
}
.el-header{
  margin-top: 10px;
  margin-left: -10px;
  height: 40px;
}
.el-footer{
  margin-bottom: 10px;
}
</style>
