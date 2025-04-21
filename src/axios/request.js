 import axios  from "axios";
 import { ElMessage } from "element-plus";
 console.log(import.meta.env.VITE_DEV_API)
 const baseURL = import.meta.env.VITE_DEV_API =='dev'?'': VITE_APP_SERVICE_URL
const http = axios.create({
    baseURL: baseURL, // API的基础路径
    timeout: 10000, // 请求超时时间
  });
   
  // 请求拦截器
  http.interceptors.request.use(
    config => {
      // 在发送请求之前做些什么，例如添加token到headers
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
   
  // 响应拦截器
  http.interceptors.response.use(
    response => {
      // 对响应数据做点什么
      console.log(response)
      return response.data;
    },
    error => {
      // 对响应错误做点什么
      if (error.response && error.response.status === 401) {
        // 例如，处理401未授权错误，可以重定向到登录页面等
        console.log('Unauthorized, please login again.');
        ElMessage.error('Unauthorized, please login again.')
      }
      return Promise.reject(error);
    }
  );
   
  export default http;