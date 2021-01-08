/*
 * @Author: your name
 * @Date: 2020-09-28 10:51:45
 * @LastEditTime: 2020-10-10 10:02:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /viteDemo/src/router/router.js
 */
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { 
            name: 'index',
            path: '/',
            redirect:'/user'
        },
        { 
            name: 'home',
            path: '/home',
            component: () => import('../view/home.vue'),
            meta:{
                title: '首页'
            }
        },
        {
            name: 'user',
            path: '/user',
            component:()=>import('../view/user.vue'),
            meta:{
                title: '个人中心'
            }
        },
        {
            name: 'login',
            path: '/login',
            component:()=>import('../view/login.vue'),
            meta:{
                title: '登录'
            }
        }
    ]
})
export default router