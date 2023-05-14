<script setup>
// 引入图片
import cartBag from '../../asset/bag.png'

import CartDetails from './CartDetails.vue';
import Checkout from '../Checkout/Checkout.vue';

import { ref } from 'vue';
import { useMealsStore } from '../../store/meals';

const mealsStore = useMealsStore()
// 控制购物车是否出现
const isShow = ref(false)
// 控制结账页面是否实现
const checkoutIsShow = ref(false)
// 隐藏Mask组件
const hiderHander = () => {
    isShow.value = false
}
// 隐藏结账页面
const close = () => {
    checkoutIsShow.value = false
}
</script>

<template>
    <CartDetails :is-show="isShow" @hide="hiderHander"></CartDetails>
    <div class="cart-bar">
        <div class="cart-bag">
            <img :src="cartBag" alt="购物车图片">
            <span class="total-count" v-show="mealsStore.totalCartCount > 0">
                {{ mealsStore.totalCartCount }}
            </span>
        </div>
        <div class="amount">
            <p class="no-goods" v-show="mealsStore.totalCartCount === 0">
                未选购商品
            </p>
            <p class="has-goods" 
            v-show="mealsStore.totalCartCount > 0"
            @click="isShow = true"
            >
                {{ mealsStore.amount }}
            </p>
        </div>

        <button class="checkout-btn" @click="checkoutIsShow = mealsStore.totalCartCount > 0">去结算</button>
        <Checkout :is-show="checkoutIsShow" @close-checkout="close"></Checkout>
    </div>
</template>

<style scoped>
.cart-bar {
    position: relative;
    display: flex;
    width: 710rem;
    height: 80rem;
    left: 0;
    top: 20rem;
    margin: 0 auto;
    border-radius: 60rem;
    background-color: rgb(58, 58, 58);
    z-index: 9999;
}

.cart-bag {
    position: relative;
    width: 70rem;
    left: 0;
    bottom: 12rem;
}

.cart-bag img {
    width: 70rem;
    height: 100rem;
}

.total-count {
    position: absolute;
    right: -10rem;
    top: -10rem;
    width: 30rem;
    height: 30rem;
    text-align: center;
    line-height: 30rem;
    background-color: red;
    color: #fff;
    font-size: 16rem;
    font-weight: bold;
    border-radius: 50%;
}

.amount {
    display: flex;
    align-items: center;
    justify-content: center;
}

.no-goods,
.has-goods {
    color: rgb(148, 148, 148);
    font-size: 36rem;
    font-weight: bold;
}

.has-goods {
    color: white;
}

.has-goods::before {
    content: "￥";
    font-size: 28rem;
}

.checkout-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 160rem;
    height: 100%;
    border: none;
    font-size: 30rem;
    border-radius: 40rem;
    background-color: rgb(248, 188, 0);
}
</style>