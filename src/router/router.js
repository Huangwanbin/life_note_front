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
            path: '/',
            component: () => import('../view/home.vue')
        },
        {
            path:'/user',
            component:()=>import('../view/user.vue')
        },
        {
            path:'/video',
            component:()=>import('../view/HelloWorld.vue')
        }
    ]
})
export default router