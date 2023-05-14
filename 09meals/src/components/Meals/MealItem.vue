<!-- 这个组件是为了容纳单个汉堡信息 -->
<script setup>
import Counter from '../UI/Counter.vue';
// 定义props
const props = defineProps(['meal'])
</script>

<template>
    <div class="meal">
        <!-- 汉堡图片 -->
        <div class="img">
            <img :src="props.meal.img" :alt="props.meal.title">
        </div>
        <!-- 汉堡信息描述 -->
        <div class="info">
            <div class="desc">
                <h2>{{ props.meal.title }}</h2>
                <p v-show="$attrs.desc">{{ props.meal.desc }}</p>
            </div>

            <div class="price-btn">
                <span class="price">{{ props.meal.price }}</span>

                <Counter :meal="props.meal"></Counter>
            </div>
        </div>
    </div>
</template>

<style scoped>
.meal {
    display: flex;
    height: 280rem;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 20rem;
}

.img {
    width: 200rem;
}

.info {
    width: 450rem;
    margin-left: 20rem;
}

.info h2 {
    color: #000;
    font-size: 30rem;
    font-weight: normal;
}

.info p {
    font-size: 26rem;
    color: #9f9f9f;
}

.price-btn {
    display: flex;
    margin-top: 40rem;
    justify-content: space-between;
}

.price {
    font-size: 30rem;
    font-weight: bold;
    color: #000;
}

.price::before {
    content: "￥";
}
</style>