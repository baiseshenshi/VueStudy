<script setup>
  import { ref } from 'vue';
  import MyButton from './components/MyButton.vue';
  import MyBox from './components/MyBox.vue'

  const msg = ref("Hello vue")
</script>

<template>
  <h1>{{ msg }}</h1>
  <MyButton/>
  <MyBox></MyBox>
</template>

<!-- 
  写在style的属性会对所有组件生效，加上一个scoped就只会对当前组件生效
  会对每个元素加上一个随机的属性，比如data-v-7a7a37b1 ，这个属性也会在
  引入的组件上加上，只不过仅限于单根组件，也就是组件的所有元素都包裹在一个元素中的组件
-->
<style scoped>
  h1{
    color: red;
  }
  /* 可以使用:deep()使得样式对引入的元素生效 */
  :deep(h1){
    color: red;
  }
  /* 全局的选择器 */
  :global(h1){
    color: greenyellow;
  }
</style>