<script setup>
import Mask from './Mask.vue';
/* 
        1.把购物车清空
        2.关闭遮罩层
        3.关闭购物车 
*/
const emits = defineEmits(['emitFst','emitSec'])

const okHandler = () => {
    emits('emitFst')
    emits('emitSec')
}
</script>

<template>
    <Mask>
        <div class="dialog">
            <p class="msg">确认删除吗</p>
            <div class="btn">
                <button class="yes" @click="okHandler()">确认</button>
                <button class="no" @click="$emit('hide')">取消</button>
            </div>
        </div>
    </Mask>
</template>

<style scoped>
.dialog {
    position: absolute;
    top: 100rem;
    left: 30rem;
    bottom: 0;
    right: 0;
    width: 700rem;
    height: 300rem;
    border-radius: 40rem;
    background-color: #f1f2f6;
}

p {
    font-size: 50rem;
    font-weight: bolder;
    text-align: center;
    line-height: 140rem;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

.yes,
.no {
    width: 160rem;
    height: 80rem;
    font-size: 36rem;
    border: 1px #eea2a4 solid;
    margin: 0 20rem;
    border-radius: 20rem;
    background-color: white;
}

.yes {
    background-color: rgb(248, 188, 0);
}
</style>