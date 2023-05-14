<script setup>
    import { ref } from 'vue';

    const count = ref(0)
    
    const addCount = () => {
        count.value++
    }

</script>

<template>
    <h1>这是一个h1标签</h1>
    <button @click="addCount">{{ count }}</button>
</template>