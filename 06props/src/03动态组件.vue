<script setup>
    import { ref } from 'vue';

    import A from './components/A.vue'
    import B from './components/B.vue'

    const isShow = ref(true)

</script>

<template>
    <!-- 
        component是一个动态组件
        动态组件最终的标签形式是由is属性决定的
     -->
    <!-- <component>我是动态组件</component>
    <component is="p">我也是动态组件</component> -->
    
    <button @click="isShow = !isShow">click</button>
    <component :is="isShow ? A : B"></component>
</template>