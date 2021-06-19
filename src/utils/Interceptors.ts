import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import getUserDetail, {UserDetail} from './index';
var axiosInstance: AxiosInstance = axios.create();

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  let user = getUserDetail() as UserDetail;
  if(user && user.access){
    config['headers']['Authorization'] = user.access;
  }
  return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (response.data.statusCode >= 200 && response.data.statusCode < 300) {
    return response.data;
  }else{
    if(response.data.statusCode >= 1002 &&
      response.data.statusCode <= 1004){
        // toastFlashMessage(response.data.message, 'error');
        setTimeout(() => {
          localStorage.clear();
          window.history.pushState({}, '', '/');
        }, 2000);
        return response.data;
    }
    return response.data;
  }
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
}

axiosInstance.defaults.baseURL = 'https://api.salestable.codecrane.com/';

axiosInstance.interceptors.request.use(onRequest, onRequestError);

axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
