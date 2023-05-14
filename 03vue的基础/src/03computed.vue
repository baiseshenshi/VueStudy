<script>
    export default{
        data(){
            return{
                count: 0
            }
        },
        methods:{
            addCount(){
                this.count++
            },
            maxCount(){
                this.count = 20
            }
        },
        /* 
            computed用来指定计算属性
            计算属性只会在所依赖的数据改变时才会被调用
            methods则会在每次组件重新渲染时都会被调用
        */
        computed:{
            // 计算属性的简写，只有getter时
            // info(){
            //     return this.count > 10 ? "大" : "小"
            // }
            info: {
                get(){
                    return this.count > 10 ? "大" : "小"
                },
                set(num){
                    this.count = 11
                }
            }
        }
    }
</script>

<template>
    <button @click="addCount">{{ count }}</button>
    <button @click="maxCount">点击直接变大</button>
    <h2>{{ info }}</h2>
</template>