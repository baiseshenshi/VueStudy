<script setup>
    import { reactive } from 'vue';
    import { shallowReactive } from 'vue';
    /* 
        reactive返回的是一个深层的响应式代理
        shallowReactive可以返回一个浅层的响应式代理
        缺点：
            -只能返回对象
        ref()
            -接收任意一个值，并返回响应式代理
    */
    const number = reactive({
        count: 0
    })

    let www = ref(0)// 生成一个0的响应式代理-->{value：0},实际上就是转换成对象
    // 要访问需要www.value,但是在vue中，在模板中会自动添加
    // 所以只需要使用www就可以访问
    // 在script中也可以自动添加

    // www = 100只会改变变量自己，在js中，无法实现对一个变量的代理

    function addCount(){
        number.count++
    }
</script>

<template>
    <h1>组合式API</h1>
    <button @click="addCount">{{number.count}}</button>
</template>