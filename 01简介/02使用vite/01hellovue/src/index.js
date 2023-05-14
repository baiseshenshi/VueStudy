// 引入vue
// 这里引入的vue不支持template
// import {createApp} from "vue"

import {createApp} from "vue/dist/vue.esm-bundler.js"
// 创建根组件并挂载
const app = {
    data(){
        return{
            message: "Hello vue"
        }
    }
}

createApp(app).mount("#app")