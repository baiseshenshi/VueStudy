<script setup>
// 引入仓库
import { useMealsStore } from './store/meals';
// 引入组件
import MealsList from './components/Meals/MealsList.vue';
import MealsFilter from './components/MealsFilter/MealsFilter.vue';
import CartBar from './components/Cart/CartBar.vue';

const mealsStore = useMealsStore()
</script>

<template>
    <MealsFilter></MealsFilter>
    <MealsList :list="mealsStore.mealsFilter" :desc="true"></MealsList>
    <CartBar></CartBar>
</template>

<style scoped></style>