import Vue from 'vue';
import Router from 'vue-router';
import zujian from "../components/zujian";
import HomeMain from "../components/HomeMain";
import Login from "../components/Login";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/HomeMain",
      component: HomeMain
    },
    {
      path: "/Login",
      component: Login
    },
    {
      path: "/zujian",
      component: zujian
  }
  ]
})
