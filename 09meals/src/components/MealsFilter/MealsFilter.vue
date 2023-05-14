<script setup>
import { useMealsStore } from '../../store/meals';

import { ref } from 'vue';

const mealsStore = useMealsStore()
</script>

<template>
    <div class="filter">
        <div class="filter-inner">
            <i class="ri-search-line"></i>
            <input type="text" v-model="mealsStore.keyword" placeholder="请输入关键字" />
        </div>
    </div>
</template>

<style scoped>
.filter {
    padding: 20rem 40rem;
    border-bottom: 1px solid rgb(184, 184, 184);
}

.filter-inner {
    display: flex;
    align-items: center;
    height: 80rem;
    position: relative;
}

input {
    border: none;
    background-color: rgb(242, 242, 242);
    width: 100%;
    height: 100%;
    border-radius: 40rem;
    outline: none;
    padding: 0 30rem 0 80rem;
    font-size: 30rem;
}

.filter-inner i {
    color: rgb(184, 184, 184);
    font-size: 40rem;
    position: absolute;
    left: 18rem;
}
</style>