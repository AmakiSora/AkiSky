import Vue from 'vue';
import Router from 'vue-router';
import zujian from "../components/zujian";
import Login from "../page/Login";
import Blog from "../page/Blog";
import MainDynamicContent from "../components/MainDynamicContent";
import MyDynamicContent from "../components/MyDynamicContent";
import Dynamic from "../page/DynamicPage";
import WritingPage from "../page/WritingPage";
import Draw from "../page/Draw";
Vue.use(Router)
const router = new Router({
  mode:'history',
  routes: [
    {
      path: "/",
      component: Login,
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
      path: "/Draw",
      component: Draw
    },
    {
      path: "/zujian",
      component: zujian
  }
  ]
})
//路由拦截器
router.beforeEach((to,from,next)=>{
  //to 将要访问的路径
  //from 从哪个路径跳转来
  //next 是一个函数，表示放行
  //next()放行        next('/login') 强制跳转
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
