<script setup>
import { computed } from 'vue'
import { ref } from 'vue'
const props = defineProps(['hot', 'maxHot'])

const width = computed(() => {
    return props.hot / props.maxHot * 100 + "%"
})

</script>

<template>
    <div class="hot-bar">
        <div class="inner">{{ props.hot }}热度</div>
    </div>
</template>

<style scoped> .hot-bar {
     background-color: rgb(3, 37, 103);
     border-radius: 20px;
     text-indent: 0.5em;
     overflow: hidden;
 }

 .inner {
     width: v-bind(width);
     background-color: red;
     white-space: nowrap;
     border-radius: 20px;
     background-image: linear-gradient(90deg, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
 }
</style>