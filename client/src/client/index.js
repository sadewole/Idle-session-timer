import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4500',
});

export default axiosInstance;
