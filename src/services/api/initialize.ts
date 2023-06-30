import axios from 'axios';
import { isMobile } from 'react-device-detect';

const getDeviceType = () => (isMobile ? 'mobile' : 'desktop');

const axiosInstance = axios.create({
  timeout: 40_000,
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'X-Web-Optimize-Response': 1,
    'X-Web-Client': getDeviceType(),
    'Content-Type': 'application/json'
  }
});

const serviceGet = axiosInstance.get;
const servicePost = axiosInstance.post;

export { serviceGet, servicePost };
