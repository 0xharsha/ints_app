import axios, { AxiosInstance, AxiosResponse } from 'axios';

var axiosInstance: AxiosInstance = axios.create();
axiosInstance.defaults.baseURL = 'https://api.swvl.codecrane.com/';
axiosInstance.interceptors.request.use(
  function (config:any) {
    if (localStorage.getItem('userInfo')) {
      config['headers']['Authorization'] = JSON.parse(
        localStorage.getItem('userInfo') || '{access : ""}'
      )['access'];
    }
    return config;
  },
  function (error:any) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
  },
  function (error) {
    if (error.response) {
      const { message, statusCode } = error.response.data;
      if (statusCode === 402) {
        localStorage.clear();
        window.history.pushState({}, '', '/');
      } else if (statusCode === 401) {
        return new Promise((resolve, reject) => {
          let originalReq: { [key: string]: any } = error.response.config;
          originalReq._retry = true;
          let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
          if (userInfo && userInfo.refresh) {
            let res = fetch('https://api.swvl.codecrane.com/auth/refresh/', {
              method: 'POST',
              cache: 'no-cache',
              headers: {
                'Content-Type': 'application/json',
              },
              referrer: 'no-referrer',
              body: JSON.stringify({
                refresh: userInfo.refresh,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                if (res?.data?.access) {
                  userInfo = {
                    ...userInfo,
                    access: res.data.access,
                  };
                  localStorage.setItem('userInfo', JSON.stringify(userInfo));
                  originalReq.headers['Authorization'] = res.data.access;
                  return axios(originalReq);
                } else {
                  localStorage.clear();
                  window.location.href = '/';
                  return Promise.reject(error.response);
                }
              });
            resolve(res);
          } else {
            localStorage.clear();
            window.history.pushState({}, '', '/');
            return reject(error.response);
          }
        });
      } else {

      }
    } else {

    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
