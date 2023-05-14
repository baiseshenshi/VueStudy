import { createApp } from 'vue'
import App from './App.vue'

// 这里的vm是组件实例，通常使用vm绑定组件实例
// vm是一个Proxy对象(代理对象)
const app = createApp(App)

const vm = app.mount('#app')

window.vm = vm
