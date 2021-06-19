import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import axiosInstance from './Interceptors'


export const globalGetService = <res, data=undefined>(url:string, data?:data): Promise<res>  =>  {
  return new Promise(
    function(resolve, reject){
      axiosInstance({
        method: 'GET',
        url: url,
        params: data,
      })
      .then((response:any) => {
        resolve(response);
      }).catch((error) => { reject(error)})
    }
  )
}

export const globalPostService = <res, data=undefined>(url:string, data?:data): Promise<res> => {
  return new Promise(
    function(resolve, reject){
      axiosInstance({
        method: 'POST',
        url: url,
        data: data
      })
      .then((response:any) => {
        resolve(response);
      }).catch((error) => { reject(error)})
    }
  )
}

export const globalPutService = <res, data=undefined>(url:string, data?:data): Promise<res> => {
    return new Promise(
        function(resolve, reject){
          axiosInstance({
            method: 'PUT',
            url: url,
            data: data
          })
          .then((response:any) => {
            resolve(response);
          }).catch((error) => { reject(error)})
        }
    )
}

// export const globalExportService = (url, queryParams={}) => {
//   return new Promise(function(resolve, reject){
//     axiosInstance({
//       method: 'GET',
//       url: url,
//       responseType: 'blob',
//       params: queryParams
//     })
//     .then(response => {
//       resolve(response);
//     }).catch(err=>{
//       console.err(err,"error")
//       reject(err)
//     })
//   })
// }

export const globalDeleteService = <res, data=undefined>(url:string, data?:data): Promise<res> => {
  return new Promise(
      function(resolve, reject){
        axiosInstance({
          method: 'DELETE',
          url: url,
          data: data
        })
        .then((response:any) => {
          resolve(response);
        }).catch((error) => { reject(error)})
      }
  )
}