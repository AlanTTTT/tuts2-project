import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'


createApp(App).use(ElementPlus).use(MotionPlugin).mount('#app')
