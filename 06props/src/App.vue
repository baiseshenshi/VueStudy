<script setup>
import C from './components/C.vue'
</script>

<template>
    <!-- 
        在组件上设置属性会自动传递给组件的根元素
        透传会发生在没有被声明为props和emit的属性上
        事件也可以透传
        自动的属性透传只能发生在单文本组件上
        在模板中，我们也可以手动通过$attrs来访问透传过来的属性(看C组件)
        
     -->
    <h1>属性的透传</h1>
    <C class="box2" style="font-weight: bold;"></C>
    <C></C>
</template>

<style>
.box2{
    color: red;
}
</style>