import axios, { AxiosRequestConfig } from 'axios';
import { serviceGet, servicePost } from './initialize';

function handleResponse({
  response,
  reject,
  resolve
}: {
  response: any;
  reject: (result: any) => void;
  resolve: (result: any) => void;
}) {
  const status = response?.status || response.data?.status || 500;
  const message = response.data?.message || '';

  switch (status) {
    case 200: {
      resolve(response?.data);
      break;
    }
    case 301: {
      reject(response);
      break;
    }
    case 401: {
      reject(response);
      break;
    }
    case 404: {
      reject(response);
      break;
    }
    default: {
      reject(response);
    }
  }

  if (status >= 300 && message) {
    reject(response);
  }
}

function get({ url, config }: { url: string; config?: AxiosRequestConfig }) {
  return new Promise((resolve, reject) => {
    serviceGet(url, config)
      .then((response) => {
        handleResponse({ response, reject, resolve });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function post({
  url,
  data,
  config
}: {
  data?: any;
  url: string;
  config?: AxiosRequestConfig;
}) {
  return new Promise((resolve, reject) => {
    servicePost(url, data, config)
      .then((response) => {
        handleResponse({ response, reject, resolve });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { get, post };
