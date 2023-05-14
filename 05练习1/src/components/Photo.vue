<script setup>
    import { computed } from 'vue'
    const props = defineProps(['item'])

    /* 
        不同排名的颜色是不一致的
        第一名：254 45 70
        第二名：245 102 1
        第三名：247 169 1
        可以使用计算属性解决
        然后再到css中使用v-bind指令
    */
   const color = computed(() => {
    if ( props.item.rate === 1 ) {
        return "rgb(254,45,70)"
    }else if ( props.item.rate === 2 ) {
        return "rgb(245,102,1)"
    } else {
        return "rgb(247,169,1)"
    }
   })
</script>

<template>
    <div class="photo">
        <img :src="props.item.img" :alt="props.item.imgAlt">
        <span>{{ props.item.rate }}</span>
    </div>
</template>

<style scoped>
.photo {
    width: 150px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.photo img {
    width: 100%;
    vertical-align: top;
}

.photo span {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: v-bind(color);
    color: #fff;
    border-bottom-right-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>