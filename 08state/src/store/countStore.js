// 引入defineStore函数
import {defineStore} from 'pinia';

// 通过函数创建store
export const useCounterStore = defineStore("counter",{
    // 数据
    state: () => ({
        count: 100,
    }),
    // 计算属性
    getters: {
        double: (state) => state.count * 2
    },
    // 方法
    actions: {
        increment(){
            this.count++
        }
    }
})