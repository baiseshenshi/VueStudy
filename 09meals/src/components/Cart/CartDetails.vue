<script setup>
import { ref } from 'vue';

import Mask from '../UI/Mask.vue';
import MealsList from '../Meals/MealsList.vue';
import DiaLog from '../UI/DiaLog.vue';
import { useMealsStore } from '../../store/meals';

const props = defineProps(['isShow'])
const emits = defineEmits(['hide'])

const meals = useMealsStore()

const showDiaLog = ref(false)
const clear = meals.clearCar

const closeMask = () => {
    showDiaLog.value = false
    emits('hide')
}
</script>

<template>
    <DiaLog :is-show="showDiaLog" @hide="showDiaLog = false" 
    @emit-fst="closeMask"
    @emit-sec="clear"
    ></DiaLog>
    <Mask :is-show="props.isShow" @hide="$emit('hide')" style="z-index: 999;">
        <div class="cartdetails">
            <header>
                <h2>餐品详情</h2>
                <a href="#" @click.stop="showDiaLog = true">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </header>
            <MealsList :list="meals.totalCart" :desc="false"></MealsList>
        </div>
    </Mask>
</template>

<style scoped>
.cartdetails {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: white;
    border-top-right-radius: 30rem;
    border-top-left-radius: 30rem;
}

:deep(.meals) {
    height: auto;
    max-height: calc(280rem*2.5);
    margin-bottom: 80rem;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rem 40rem;
}

h2 {
    font-size: 30rem;
    font-weight: 800;
    margin: 24rem;
}

a {
    font-size: 25rem;
    color: gray;
    text-decoration: none;
    text-align: right;
    margin: 20rem;
}
</style>