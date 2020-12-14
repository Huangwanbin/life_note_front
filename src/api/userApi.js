import http from '../utils/request.js'
let api = {
    login(params){
        return http.post(`http://127.0.0.1:7001/login`,params)
    },
    getUserInfo(query){
        return http.get(`http://127.0.0.1:7001/get_user_info?user_id=${query.user_id}`)
    }
}
export default api