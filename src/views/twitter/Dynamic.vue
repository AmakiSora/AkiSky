<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <div class="main">
        <div class="leftAside">
          <el-card :body-style="{ padding: '0px' }">
            <el-row>
              <el-image
                  style="width: 244px; height: 64px"
                  :src="url"
                  :fit="fit"
              ></el-image>
              <el-avatar class="leftAsideAvatar" :size="56" :src="avatarUrl"></el-avatar>
              <p class="leftAsideUsername">COSMOS</p>
            </el-row>
          </el-card>
          <el-card :body-style="{ padding: '0px' }">
            <el-row>
              <el-button class="leftAsideMenu">233</el-button>
            </el-row>
            <el-row>
              <el-button class="leftAsideMenu">233</el-button>
            </el-row>
            <el-row>
              <el-button class="leftAsideMenu">233</el-button>
            </el-row>
            <el-row>
              <el-button class="leftAsideMenu">233</el-button>
            </el-row>
          </el-card>

        </div>
        <div class="centerDynamic">
          <div class="infinite-list-wrapper" style="overflow: auto">
            <ul
                style="padding: 0;margin: 0"
                v-infinite-scroll="load"
                class="list"
                infinite-scroll-disabled="disabled"
            >
              <el-card v-for="i in count" :key="i" class="list-item" :body-style="{ padding: '20px 0 20px 20px' }">
                <el-row style="flex-direction: column;">
                  <el-avatar></el-avatar>
                  <div style="top: 3px;left: 50px;position: absolute">COSMOS</div>
                  <div style="top: 20px;left: 50px;position: absolute;font-size: 12px;color:#99a2aa">四小时前</div>
                </el-row>
                <el-row style="left: 50px;float: left">
                  <div style="font-size: 14px;">
                    233666你
                  </div>
                </el-row>
                <el-row style="left: 50px;font-size: 14px">
                  <div style="font-size: 14px;">
                    22222222222222222
                  </div>

                </el-row>
              </el-card>
            </ul>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">无了</p>
          </div>
        </div>
        <div class="rightAside">
          <el-card>233</el-card>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Header from "../public/Header.vue";
import {computed, reactive, ref, toRefs} from "vue";

export default {
  name: "Dynamic",
  components: {Header},
  setup() {
    const state = reactive({
      fit: "cover",
      url: 'http://sdfsdf.dev/244x64.jpg',
      avatarUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    })
    const count = ref(10)
    const loading = ref(false)
    const noMore = computed(() => count.value >= 20)
    const disabled = computed(() => loading.value || noMore.value)
    const load = () => {
      loading.value = true
      setTimeout(() => {
        count.value += 2
        loading.value = false
      }, 2000)
    }

    return {
      ...toRefs(state),
      count,
      loading,
      noMore,
      disabled,
      load,
    }
  },
}
</script>

<style scoped>
.el-header {
  margin: 0;
  padding: 0;
}

.el-main {
  margin: 0;
  padding: 0;
  flex-direction: column;
  display: flex;
  align-items: center;
}

.main {
  background: aqua;
  flex-direction: row;
  display: flex;
}

.leftAside {
  width: 244px;
  height: 100%;
  background: #42b983;
}

.centerDynamic {
  width: 630px;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
  background: bisque;
}

.rightAside {
  width: 244px;
  height: 100%;
}

.el-card {
  border-radius: 16px;
  /*padding: 0;*/
}

.leftAsideAvatar {
  top: -10px;
  left: 16px;
  display: flex;
  position: relative;
}

.leftAsideUsername {
  top: -5px;
  left: 26px;
  display: flex;
  position: relative;
}

.leftAsideMenu {
  width: 100%;
}

.infinite-list-wrapper {
  height: 100%;
  text-align: center;
}
</style>