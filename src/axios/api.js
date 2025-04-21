import http from './request';
const gateway =  import.meta.env.VITE_DEV_API == 'dev'?'/dev-api':''

export const GetBaseInfo = async () => {
  return await http.get(`${gateway}/`)
}
export const GetCsrfCookie = async () => {
  return await http.get(`${gateway}/csrf-cookie`)
}
export const Login = async (data) => {
  return await http.post(`${gateway}/login`, data)
}
export const Logout =  async (data) => {
  return await http.post(`${gateway}/logout`, data)
}
export const GetApiUser = async () => {
  return await http.get(`${gateway}/api/user`)
}
