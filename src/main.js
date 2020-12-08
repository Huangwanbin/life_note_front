import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'
import './index.css';
import { Field , Button,Toast } from 'vant';
import "/@modules/vant/lib/index.css";
import '@vant/touch-emulator';

const app = createApp(App)
app.use(router);
app.use(Field).use(Button).use(Toast)
app.mount('#app');

