import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:7001/api';
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  res => {
    if(res.status === 200) {
      if(res.data.status === 200) return res.data;
      handleError(res.data.status, res.data.message)
    } else {
      console.log(res.data)
      Promise.reject(res.data)
      // handleError(error.status, error.info)
    }
    
  },
  error => handleError(error.status, error.info)
)

const handleError = async (status: number, info: any) => {
  switch(status){
    case 400:
      console.log(info);
      break;
    case 401:
      console.log(info);
      break;
    case 403:
      console.log('服务器已经理解请求，但拒绝执行！');
      break;
    case 404:
      console.log('请检查网络请求地址');
      break;
    case 500:
      console.log('服务器遇到了一个未曾预料的状况，导致它无法完成对请求的处理。');
      break;
    case 502:
      console.log('作为网关或者代理的服务器尝试请求时，从上游服务器接收到无效的响应');
      break;
    default:
      console.log(info);
      break;
  }
  Promise.reject()
}

export default axios;