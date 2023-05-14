<!-- 设置setup后开启简写模式 -->
<script setup>
    import { reactive } from 'vue';
    const number = reactive({
        count: 0
    })

    function addCount(){
        number.count++
    }
</script>

<template>
    <h1>组合式API</h1>
    <button @click="addCount">{{number.count}}</button>
</template>