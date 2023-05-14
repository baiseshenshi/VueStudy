<script setup>
import { useMealsStore } from '../../store/meals';
import {ref} from 'vue'

import Counter from '../UI/Counter.vue';

const props = defineProps(['isShow'])
const emits = defineEmits(['closeCheckout'])

const meals = useMealsStore()

const close = () => {
    emits('closeCheckout')
}
</script>

<template>
    <Teleport to="#hello"></Teleport>
    <div class="checkout" v-show="props.isShow">
        <!-- 删除号 -->
        <a href="#" @click.stop="close">
            <i class="ri-close-line"></i>
        </a>
        <!-- 订餐详情页面 -->
        <div class="meal-list">
            <header>
                <h2>餐品详情</h2>
            </header>
            <hr />

            <div class="meals">
                <div class="item" v-for="item of meals.totalCart">
                    <div class="img">
                        <img :src="item.img" :alt="item.desc">
                    </div>

                    <div class="info">
                        <p>{{ item.title }}</p>
                        <div class="pay">
                            <Counter :meal="item"></Counter>
                            <p class="total-price">{{ item.price * item.count }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <footer>
                <span>合计 ￥</span>
                <span class="price">
                    {{ meals.amount }}
                </span>
            </footer>
        </div>
        <!-- 合计栏 -->
        <div class="go-pay">
            <div class="pay-info">
                <span>合计 ￥</span>
                <span class="price">
                    {{ meals.amount }}
                </span>
            </div>

            <button class="pay-btn"> 去支付</button>
        </div>
    </div>
</template>

<style scoped>
.checkout {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 900rem;
    height: 100vh;
    background-color: rgb(240, 240, 240);
    z-index: 99999;
}

a {
    display: block;
    height: 80rem;
    font-size: 50rem;
}

.meal-list {
    position: relative;
    width: 720rem;
    height: auto;
    background-color: white;
    border-radius: 50rem;
    margin-left: 15rem;
}

.meals {
    height: auto;
    max-height: calc(280rem*2);
    overflow-y: scroll;
}

.meals::after,
.meals::before {
    position: absolute;
    content: "";
    bottom: 124rem;
    width: 30rem;
    height: 30rem;
    background-color: rgb(240, 240, 240);
    border-radius: 50%;
}

.meals::before {
    left: -15rem;
}

.meals::after {
    right: -15rem;
}

.item {
    display: flex;
    align-items: center;
}

.info {
    width: 600rem;
    height: 140rem;
}

.info p {
    font-size: 30rem;
    font-weight: bold;
}

.pay {
    display: flex;
    justify-content: space-between;
    margin-top: 40rem;
}

.total-price::before {
    content: "￥";
}

h2 {
    font-size: 36rem;
    padding: 20rem;
}

.img {
    width: 200rem;
}

footer {
    height: 140rem;
    line-height: 140rem;
    text-align: right;
}

footer span {
    font-size: 20rem;
}

.price {
    font-size: 36rem;
    font-weight: bold;
}

.go-pay {
    width: 700rem;
    height: 80rem;
    background-color: rgb(58, 58, 58);
    position: absolute;
    bottom: 40rem;
    left: 40rem;
    border-radius: 70rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}
.pay-info{
    margin-left: 15rem;
    color: #fff;
}
.pay-info span {
    font-size: 20rem;
}
.pay-info .price{
    font-size: 36rem;
}
.pay-btn{
    width: 200rem;
    height: inherit;
    border-radius: 50rem;
    font-size: 30rem;
    border: none;
    background-color: rgb(234, 178, 0);
}
</style>