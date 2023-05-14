<script setup>
   const props = defineProps(["count",'obj'])
</script>

<template>
    <div id="box">
        <h1>{{ props.obj.count }}</h1>
        <h2>我是子组件MyBox</h2>
        <button @click="props.obj.count++">MyBox</button>
    </div>
</template>

<style scoped>
    #box{
        background-color: cadetblue;
        width: 100px;
    }
</style>