import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import {createPinia} from "pinia";
import {mockXHR} from "./mock";

const pinia = createPinia();
// dev模式开启moack
// if(import.meta.env.MODE === 'development'){
//     console.log('start mock')
//     mockXHR()
// }
const app = createApp(App);
app.use(router);
app.use(pinia);

app.mount('#app');
