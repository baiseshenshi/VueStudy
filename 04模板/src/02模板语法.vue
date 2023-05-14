<script setup>
  import { ref } from 'vue';

  const msg = "Hello Vue"

  const html = `<h1 style="color:red">1111</h1>`

</script>

<template>
  <!-- 
      模板中不仅可以使用js中定义的变量和函数，还可以使用一些全局变量
      如RegExp、Date等，具体参考https://cn.vuejs.org/guide/essentials/template-syntax.html#using-javascript-expressions
      受限的全局访问

      除此之外，也可以通过app来添加一些全局变量
        app.config.globalProperties = xxx

      指令：
        以v-开头的一系列vue指令
        v-text，将表达式的值作为元素插入，等同于textContent
        v-html，将表达式的值作为元素的innerhtml插入，有XSS注入的风险
  -->
  <h1>{{ msg }}</h1>
  <h1>{{ Date.now() }}</h1>
  <h2 v-text="111+111"></h2>
  <h2 v-html="html"></h2>
</template>