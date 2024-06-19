import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 设置为你的后端 URL
  timeout: 10000, // 可选：设置请求超时时间
});

export default axiosInstance;