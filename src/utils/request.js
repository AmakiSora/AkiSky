import axios from "axios";

const service = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000
})
//添加请求拦截器
service.interceptors.request.use(config => {
    return config;
})

//添加响应拦截器
service.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default service