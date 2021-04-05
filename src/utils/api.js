import axios from "axios";
import {Message} from "element-ui";
import router from "../router";
//响应拦截器
axios.interceptors.response.use(success=>{
  if (success.status && success.status == 200){//请求发送成功
    if (success.data.code==500||success.data.code==401||success.data.code==403){//业务逻辑错误
      Message.error({message:success.data.message});
      return;
    }
    if (success.data.message){//成功信息
      Message.success({message:success.data.message});
    }
  }
  return success.data;
},error => {//请求发送失败
  if (error.response.code==404||error.response.code==504){
    Message.error({message:'服务器开小差了！！！'});
  }else if (error.response.code==403){
    Message.error({message:'没有权限'});
  }else if (error.response.code==401){
    Message.error({message:'尚未登录'});
    router.replace('/login')
  }else {
    if (error.response.data.message){
      Message.error({message:error.response.data.message});
    }else {
      Message.error({message:'未知错误!'});
    }
  }
  return;
})

let path = 'http://loaclhost:8080'
//传送json格式的post请求
export const postRequest= (url,params)=>{
  return axios({
    method:'post',
    url:'${path}${url}',
    data: params
  })
}

