import axios from 'axios';
import QS from 'qs';

//设置超时时间
axios.defaults.timeout = 10000;
//中文乱码
axios.defaults.headers = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
}
//请求拦截(请求发出前处理请求)
axios.interceptors.request.use((config) => {
    //在发送请求之前如果为post序列化请求参数
    if (config.method === 'post') {
      config.data = config.data;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });