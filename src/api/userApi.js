import http from '../utils/request.js'
let api = {
    login(params){
        return http.post(`http://127.0.0.1:7001/login`,params)
    },
    getUserInfo(query){
        return http.get(`http://127.0.0.1:7001/home`,query)
    }
}
export default api