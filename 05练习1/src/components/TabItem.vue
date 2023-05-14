<script setup>
    /* 
        子组件的数据应当在创建组件实例时确定
        父组件可以通过 props 将数据传递给子组件

        使用props
            -先在子组件中定义props
    */
import Photo from './Photo.vue';
import HotBar from './HotBar.vue';

    // 定义一个props 
    const props = defineProps(['item','maxHot'])

</script>

<template>
    <div class="tab-item">
        <!-- 照片 -->
        <Photo :item="props.item"></Photo>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ props.item.name }}</span>
            <HotBar :hot="props.item.hot" :max-hot="props.maxHot"></HotBar>
        </div>
    </div>
</template>

<style scoped>
.tab-item {
    display: flex;
    margin-bottom: 20px;
}

.desc {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    font-size: 30px;
    color: #fff;
    flex: auto;
    margin-left: 30px;
}
</style>