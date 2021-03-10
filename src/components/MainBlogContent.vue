<template>
  <div>
<!--  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">-->
<!--    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>-->
<!--  </ul>-->
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count">
        <el-container>
          <el-aside>
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
          </el-aside>
          <el-main>
            <h6>内容</h6>
          </el-main>
        </el-container>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
  </div>
</template>

<script>
export default {
  name: "MainBlogContent",
  data () {
    return {
      count: 10,
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

</style>
