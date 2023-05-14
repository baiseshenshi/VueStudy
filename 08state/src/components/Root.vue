<script setup>
import { ref,provide } from 'vue';
import A from './A.vue';
import B from './B.vue';
import C from './C.vue';

const count = ref(0)

const increment = () => {
    count.value++
}

provide("count",{
    count,
    increment
})
</script>

<template>
    <h2>根组件</h2>
    <ul>
        <li><A></A></li>
        <li><B></B></li>
        <li><C></C></li>
    </ul>
</template>