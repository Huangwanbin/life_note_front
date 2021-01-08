import axios from 'axios'
import router from '../router/router.js'

//请求拦截器
axios.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      config.headers.common['Authorization'] = 'Bearer '+token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
//响应拦截器
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.token) {
      window.localStorage.setItem('token',response.data.token)
    }
    console.log(response,'resresresres');
    if (response) {
      
    }
    return response.data;
  }, function (error) {
    const {status} = error.response
    if (status === 401) {
      router.push('/login')
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export default axios