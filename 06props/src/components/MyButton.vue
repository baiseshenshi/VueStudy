<script setup></script>
<template>
    <button>
        <!-- slot中的内容通过标签体完成 -->
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    width: 300px;
    height: 200px;
    font-size: 50px;
}
</style>