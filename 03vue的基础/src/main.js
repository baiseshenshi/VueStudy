import { createApp } from 'vue'
import App from './App.vue'

const vm = createApp(App).mount('#app')
// 把vm挂到全局变量上
window.vm = vm
