<script setup>
/* 
            Tab组件主要的作用就是在多个选项卡之间进行切换，
                其中显示的主要内容是 TabList
                而TabList的数据位于App组件中，
                如果还按照之前的方式编写代码，必须要在App组件中将数据传递给Tab
                    然后再由Tab传递给TabList，这样做可以但是比较麻烦
     */
import { ref } from 'vue';

import TabList from './TabList.vue';
// 创建一个变量记录选项卡的状态
let current = ref(0) // 0表示球员，1表示球队
// 点击改变current，并改变选项卡状态
const chageTabACtive = () => {
    current.value == 0 ? current.value = 1 : current.value = 0
}
</script>

<template>
    <!-- 选项卡外部容器 -->
    <div class="tab-wrapper">
        <!-- 选项卡头部 -->
        <header class="tab-head">
            <!-- 定义两个按钮 -->
            <div class="tab-button" :class="{ active: current === 0 }" @click="chageTabACtive">热门球员</div>
            <div class="tab-button" :class="{ active: current === 1 }" @click="chageTabACtive">热门球队</div>
        </header>
        <!-- 选项卡主题 -->
        <div class="main">
            <!-- 
        v-show指令，接收一个布尔值，true就显示，false就不显示
        v-show是通过display：none删除元素的
       -->

            <!-- 球员选项卡页面 -->
            <div v-show="current === 0">
                <!-- 列表 -->
                <slot name="0"></slot>
            </div>
            <!-- 球员选项卡页面 -->
            <div v-show="current === 1">
                <!-- 列表 -->
                <slot name="1"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-wrapper {
    box-sizing: border-box;
    width: 800px;
    padding: 10px;
    background-color: rgb(45, 83, 211);
}

.tab-head {
    display: flex;
    border-radius: 20px;
    overflow: hidden;
}

.tab-button {
    background-color: white;
    font-size: 30px;
    flex: auto;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
}

.active {
    background-color: rgb(187, 3, 52);
    color: #fff;
}

.tab-button:not(.active):hover {
    color: rgb(187, 3, 52);
}
</style>