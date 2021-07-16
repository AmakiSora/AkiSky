import Vue from 'vue';
import Router from 'vue-router';
import zujian from "../components/zujian";
import Login from "../components/Login";
import Blog from "../page/Blog";
import MainDynamicContent from "../components/MainDynamicContent";
import MyDynamicContent from "../components/MyDynamicContent";
import Home from "../page/Home";
import Dynamic from "../page/DynamicPage";
import LoginPage from "../page/LoginPage"
import WritingPage from "../page/WritingPage";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/LoginPage",
      component: LoginPage,
    },
    {
      path: "/",
      component: LoginPage,
    },
    {
      path: "/Dynamic",
      component: Dynamic,
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
      path: "/Writing",
      component: WritingPage
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
