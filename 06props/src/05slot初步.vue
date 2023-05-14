<script setup>
import MyButton from './components/MyButton.vue';
import MyWrapper from './components/MyWrapper.vue';
import A from './components/A.vue';
</script>

<template>
    <!-- 
        希望在父组件中指定子组件的内容
        我们可以通过插槽(slot)来完成这个功能
        插槽可以传递文字，标签，甚至是组件
        通过插槽引入的组件，还是在父组件的作用域中
    -->
<MyButton>哈哈哈</MyButton>
<br/>
<!-- A组件依旧是在App组件的作用域中 -->
<MyButton><A></A></MyButton>
<hr/>
<MyWrapper>
    <!-- <template v-slot:h1>一级标题</template>
    <template v-slot:h2>二级标题</template> -->
    <!-- 可以简写成# -->
    <template #h1>一级标题</template>
    <template #h2>二级标题</template>
</MyWrapper>
</template>