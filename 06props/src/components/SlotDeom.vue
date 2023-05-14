<script setup>
const FireFox = "火狐"

const cat = {
    name:"niko",
    age: 10,
}
</script>

<template>
    <h1>SlotDemo组件</h1>
    <!-- 可以为slot传递一个默认内容 -->
    <slot name="dafault">这是默认内容</slot>
    <br/>
     <!-- 插槽可以向父组件反向传递数据 -->
    <slot name="test" :FireFox="FireFox"></slot>
    <br/>
    <slot name="catSlot" :catAge="cat.age" :catName="cat.name"></slot>
</template>