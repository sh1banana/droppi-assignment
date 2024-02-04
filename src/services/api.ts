/** LIBRARY */
import axios from "axios";
/** COMMON */
import { Configs } from "~/configs";

const Api = axios.create({
  baseURL: Configs.baseUrl
});

Api.interceptors.request.use(
  (request) => {
    request.headers.Authorization = `Bearer ${Configs.accessToken}`;
    return request;
  },
  (error) => {
    return Promise.reject(error)
  }
);

// Api.interceptors.response.use((response) => {
//   return response;
// }, (error) => {
//   if (error.response.status === 401) {
//     if (window.location.pathname !== '/sign-in' && !window.location.pathname.includes(`/${Configs.role.teacher.toLowerCase()}`) && !window.location.pathname.includes(`/${Configs.role.admin.toLowerCase()}`)) {
//     } else {
//       window.location = `${window.origin}/sign-in`
//     }

//     localStorage.clear()
//     store.dispatch({ type: USER_LOGOUT_ACTION })
//   }
//   return Promise.reject(error);
// });

export default Api;
