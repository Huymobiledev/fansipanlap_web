import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  function(config) {
    const ls = localStorage.getItem('dapp_cctpa_chain_id');
    const chainId = ls ? JSON.parse(ls) : process.env.NEXT_PUBLIC_CHAIN_ID || 97;
    const lang = localStorage.getItem('i18nextLng') || document.documentElement.lang || 'en';
    const headers = {
      ...config.headers,
      'x-lang': lang,
      'x-chain-id': chainId,
      'x-os': 'dapp',
    };

    return {
      ...config,
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      localStorage.removeItem('user');
      window.location.replace(window.location.origin);
    }

    return Promise.reject(error);
  }
);

export function setBearerToken(token: string | null) {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = token ? `Bearer ${token}` : null;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default axiosInstance;
