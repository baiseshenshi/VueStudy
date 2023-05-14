<script setup>
    import { ref } from 'vue'

    const isShow = ref(true)
</script>

<template>
    <!-- 
        v-show是通过css切换组件的显示状态
        v-if是通过删除添加元素的方式切换组件的显示状态
        因为是纯css的方式，v-show不会重新渲染组件，性能较好
        但是初始化时，会初始化所有的组件

        因为删除添加了元素，v-if会重新渲染组件
        v-if只会初始化需要用到的组件，所以它的初始换性能较好

        v-if可以和template搭配使用,因为template不会显示
     -->
    <h1 v-show="isShow">v-show测试</h1>
    
    <button @click="isShow = !isShow">ChangeShow</button>

    <h1 v-if="isShow">v-if测试</h1>
    <h1 v-else>v-else</h1>

     <template v-if="isShow">
        <h2>h2</h2>
        <h3>h3</h3>
     </template>
</template>