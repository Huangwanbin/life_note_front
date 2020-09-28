/*
 * @Author: your name
 * @Date: 2020-09-21 10:47:33
 * @LastEditTime: 2020-09-28 10:34:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /viteDemo/src/main.js
 */
import { createApp } from 'vue';
import App from './App.vue';
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
      { path: '/', component: App }
    ]
  })
import './index.css';

const app = createApp(App)
app.use(router);
app.mount('#app');

