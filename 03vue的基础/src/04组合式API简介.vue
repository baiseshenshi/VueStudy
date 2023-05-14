<script>
    // 组合式API简介
    import { reactive } from 'vue'

    export default{
        // setup是一个钩子函数，可以通过这个函数向外暴露组件的配置
        setup(){
            // 在组合式API中，直接声明的变量就是一个普通的变量，不是一个响应式数据
            let msg = "Vue"
            const count = 0

            // 可以通过reactive声明一个响应式的对象
            const number = reactive({
                num: 0
            })

            function addNum(){
                number.num++
            }

            // 向外暴露的属性可以在模板中使用
            return{
                msg,
                count,
                number,
                addNum
            }
        }
   }
</script>

<template>
    <h2>{{ msg }}</h2>
    <p>不是响应式的数据</p>
    <button @click="count++">{{ count }}</button>
    <hr/>
    <p>是响应式的数据</p>
    <button @click="addNum">{{ number.num }}</button>
</template>