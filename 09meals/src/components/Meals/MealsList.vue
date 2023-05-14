<!-- 这个组件是所有汉堡的容器 -->
<script setup>
import MealItem from './MealItem.vue';

const props = defineProps(['list','desc'])
</script>

<template>
    <!-- 容纳所有汉堡 -->
    <div class="meals">
        <!-- 显示汉堡信息 -->
        <MealItem v-for="item of props.list" :meal="item" :desc="props.desc"></MealItem>
        <h2 
        class="meal-hint" 
        v-show="props.list && props.list.length === 0">没有需要的产品</h2>
    </div>
</template>

<style scoped>
    .meals{
        height: calc(100vh - 260rem);
        background-color: white;
        overflow: auto;
    }
    .meal-hint{
        font-size: 60rem;
        color: rgb(184,184,254);
        text-align: center;
        margin-top: 80rem;
    }
</style>