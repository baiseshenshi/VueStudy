<script setup>
import SlotDemo from './components/SlotDeom.vue';
</script>

<template>
    <!-- 
        插槽可以向父组件反向传递数据
        传递的是一个对象
    -->
    <SlotDemo>
        <template #test="slotData">
            这是父组件传递的
            {{ slotData }}
            {{ slotData.FireFox }}
        </template>
        
        <template #catSlot="{ catAge,catName }">
            {{ catAge }}--{{ catName }}
        </template>
    </SlotDemo>
</template>