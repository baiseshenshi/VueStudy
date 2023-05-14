<script>
    export default{
        // data是用来指定实例对象中的响应式属性
        data(){
            return{
                count: 0
            }
        },
        /* 
            methods用来指定实例对象中的方法
                -可以定义多个方法
                -这些方法可以挂载到组件实例上
        */
        methods:{
            addCount(){
                this.count++
            }
        }
    }
</script>

<template>
    <button @click="addCount">{{ count }}</button>
</template>