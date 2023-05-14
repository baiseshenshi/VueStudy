/* 
    使用pinia
        1.安装
        2.引入createPinia
        3.创建pinia
        4.将pinia作为vue的插件

*/
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
// 这个方法是将pinia作为vue的插件
app.use(pinia)

app.mount('#app')