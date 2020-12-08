import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'
import './index.css';
import { Field , Button,Toast,Image as VanImage  } from 'vant';
import "/@modules/vant/lib/index.css";
import '@vant/touch-emulator';
import 'amfe-flexible/index.js'
const app = createApp(App)
app.use(router);
app.use(Field).use(Button).use(Toast).use(VanImage)
app.mount('#app');

