//路由
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/login/Login.vue";
import Dynamic from "../views/twitter/Dynamic.vue";
import ops from "../views/twitter/ops.vue";

const routes = [
    {
        path: '/',
        component: ops
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/dynamic',
        component: Dynamic
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router