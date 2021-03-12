// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from "axios";
import apiConfig from "../config/apiConfig";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
axios.defaults.baseURL = apiConfig.baseUrl;// 配置接口地址
axios.defaults.withCredentials = false;

Vue.use(ElementUI,axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
