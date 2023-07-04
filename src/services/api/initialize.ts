import axios, { CancelTokenSource } from 'axios';
import { isMobile } from 'react-device-detect';

const getDeviceType = () => (isMobile ? 'mobile' : 'desktop');

const axiosInstance = axios.create({
  timeout: 40_000,
  withCredentials: true,
  baseURL: '/api',
  headers: {
    Accept: 'application/json',
    'X-Web-Optimize-Response': 1,
    'X-Web-Client': getDeviceType(),
    'Content-Type': 'application/json'
  }
});

let cancelTokenSource: CancelTokenSource;

axiosInstance.interceptors.request.use(
  (config) => {
    // Cancel previous request (if any)
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Duplicate request detected');
    }

    // Create a new cancel token for the current request
    cancelTokenSource = axios.CancelToken.source();
    config.cancelToken = cancelTokenSource.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const serviceGet = axiosInstance.get;
const servicePost = axiosInstance.post;

export { serviceGet, servicePost };
