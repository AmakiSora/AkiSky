import Vue from 'vue';
import Router from 'vue-router';
import zujian from "../components/zujian";
import HomeMain from "../components/HomeMain";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/HomeMain",
      component: HomeMain
    },
    {
      path: "/zujian",
      component: zujian
  }
  ]
})
