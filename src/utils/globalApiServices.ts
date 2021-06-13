import axiosInstance from './httpinterceptor'

export const globalGetService = <params, res>(url:string, params?:params): Promise<res> =>  {
  return new Promise(
    function(resolve, reject){
      axiosInstance({
        method: 'GET',
        url: url,
        params: params
      })
      .then(response => {
        resolve(response);
      }).catch((error) => { reject(error)})
    }
  )
}
// export const globalPostService = (url, data) => {
//   return new Promise(
//     function(resolve, reject){
//       axiosInstance({
//         method: 'POST',
//         url: url,
//         data: data
//       })
//       .then(response => {
//         resolve(response);
//       }).catch((error) => { reject(error)})
//     }
//   )
// }
// export const globalPutService = (url, data) => {
//     return new Promise(
//         function(resolve, reject){
//           axiosInstance({
//             method: 'PUT',
//             url: url,
//             data: data
//           })
//           .then(response => {
//             resolve(response);
//           }).catch((error) => { reject(error)})
//         }
//     )
// }
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
// export const globalDeleteService = (url, data) => {
//   return new Promise(
//       function(resolve, reject){
//         axiosInstance({
//           method: 'DELETE',
//           url: url,
//           data: data
//         })
//         .then(response => {
//           resolve(response);
//         }).catch((error) => { reject(error)})
//       }
//   )
// }