import http from '@/utils/request.js'
let api = {
    login(url,params){
        return http.post(url,prams)
    },
    getUserInfo(url,query){
        return http.get(url,query)
    }
}
export default api