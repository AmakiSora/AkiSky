import Vue from 'vue';
import Router from 'vue-router';
import zujian from "../components/zujian";
import Login from "../components/Login";
import Blog from "../page/Blog";
import MainDynamicContent from "../components/MainDynamicContent";
import MyDynamicContent from "../components/MyDynamicContent";
import Home from "../page/Home";
import Contents from "../components/Contents";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Home",
      component: Home
    },
    {
      path: "/Contents",
      component: Contents,
      children:[
        {
          path: "/MainDynamicContent",
          component: MainDynamicContent
        },
        {
          path: "/MyDynamicContent",
          component: MyDynamicContent
        }
      ]
    },
    {
      path: "/Login",
      component: Login
    },
    {
      path: "/MainDynamicContent",
      component: MainDynamicContent
    },
    {
      path: "/MyDynamicContent",
      component: MyDynamicContent
    },
    {
      path: "/Blog",
      component: Blog
    },
    {
      path: "/zujian",
      component: zujian
  }
  ]
})
