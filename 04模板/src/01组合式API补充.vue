<script setup>
  // 引入ref,computed
  import { ref,computed } from 'vue';

  const msg = ref("Hello Vue")

  const changeMessage = () => {
    // 改变ref对象时，必须通过.value
    msg.value = "变一下"
  }

  const obj = ref({
    name: "Tom Sun",
    age: 18
  })

  const obj2 = {
    name: ref("Tom Sun")
  }
  // 也可以使用结构赋值
  // const { name,age } = obj2
  // 这样赋值也可以在模板中直接使用 

  // computed用来生成计算属性
  const newMsg = computed(() => {
    return msg.value + "计算属性"
  })
</script>

<template>
  <!-- ref代理的对象可以在模板中直接访问，但只能是顶层对象 -->
  <h1>{{ msg }}</h1>
  <h1>{{ newMsg }}</h1>
  <button @click="changeMessage">Change</button>
  <!-- obj是顶层对象，obj2不是。所以不能直接访问 -->
  <h2>{{ obj.name }}</h2>
  <!-- 如果要访问应该使用obj2.name.value -->
  <h2>{{ obj2.name }}</h2>
</template>