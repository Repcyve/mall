import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//pinia
import { createPinia } from 'pinia' 
const pinia = createPinia()

//routes
 import router from "./routers/index";
 import ElementPlus from 'element-plus'
createApp(App).use(pinia).use(ElementPlus).use(router).mount('#app')
