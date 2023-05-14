<script setup>
  import MyBox from './components/MyBox.vue'
</script>

<template>
  <div :class="$style.box1">111</div>
  <MyBox :class="$style.box1"></MyBox>
</template>

<!-- 
  CSS模块
    - 自动的对模块中的类名进行hash化来确保类名的唯一性
    - 在模板中可以通过 $style.类名 使用
    - 也可以通过module的属性值来指定变量名
 -->
<style module>
  .box1{
    background-color: blue;
  }
</style>