<script setup>
import { useAttrs } from 'vue';
import A from './A.vue'
// 要在脚本中访问$attrs，需要使用useAttrs
const attrs = useAttrs()

console.log(attrs);
</script>

<script>

    export default{
        // 会关闭自动透传，手动透传不会关闭
        inheritAttrs: false
    }
</script>

<template>
    <h2 :class="$attrs.class">C组件</h2>
    <A></A>
    <!-- 
        因为传递过来的$attrs是一个对象,使用这种方式可以将所有属性添加到元素上
        结果为<h3 class="box2" style="font-weight:bold">h3</h3>
    -->
    <h3 :="$attrs">h3</h3>
</template>