import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { 
            path: '/',
            component: () => import('../view/HelloWorld.vue')
        }
    ]
})
export default router