<script setup>
import { useMealsStore } from '../../store/meals';

const mealsStore = useMealsStore()

const props = defineProps(['meal'])

</script>

<template>
    <div class="counter">
        <!-- 只有count大于0时，才显示，否则只显示加号 -->
        <template v-if="props.meal.count > 0">
            <button class="sub" @click="mealsStore.subMealFromcart(props.meal)">
                <i class="ri-subtract-fill"></i>
            </button>
            <span>{{ props.meal.count }}</span>
            <button class="add" @click="mealsStore.addMealToCart(props.meal)">
                <i class="ri-add-line"></i>
            </button>
        </template>

        <button class="add" @click="mealsStore.addMealToCart(props.meal)" v-else>
            <i class="ri-add-line"></i>
        </button>
    </div>
</template>

<style scoped>
.counter {
    display: flex;
    align-items: center;
}

.counter span {
    font-size: 24rem;
    margin: 10rem;
}

.sub,
.add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34rem;
    height: 36rem;
    background-color: rgb(234, 178, 0);
    border: none;
    font-size: 36rem;
    border-radius: 50%;
}

.sub {
    background-color: white;
    border: 1px solid black;
}
</style>