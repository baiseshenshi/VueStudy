<script setup>
import {inject} from 'vue';
import { countStore } from '../store/count';
// 引入pinia仓库
import { useCounterStore } from '../store/countStore';

// 使用pinia仓库
const counterStore = useCounterStore();
// const { count,increment } = inject("count")


/* 
    状态管理
        -状态(state)
            -应用当中的数据就是状态，状态即数据
        -视图(view)
            -用来呈现数据
        -交互(action)
            -用户的操作

    提升状态
        -当有多个组件中需要使用到同一个状态时，可以把相应的状态提升
        到同一个父组件中
*/
</script>

<template>
    <h3>
        A组件
        <button @click="countStore.increment">{{ countStore.count }}</button>
    </h3>

    <h3>
        pinia
        {{ counterStore.double }}
        <button @click="counterStore.increment">{{ counterStore.count }}</button>
    </h3>
</template>