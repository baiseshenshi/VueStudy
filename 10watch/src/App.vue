<script setup>
import { watch, ref } from 'vue';
import { watchEffect } from 'vue';

const todoId = ref(1)
const data = ref(null)
const todoId2 = ref(1)
const data2 = ref(null)

//在这个侦听中使用了两次todoId 
watch(todoId, async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
},
  { immediate: true }
)
// 使用watchEffect可以简化代码
/* 
  这个例子中，回调会立即执行，不需要指定 immediate: true。
  在执行期间，它会自动追踪 todoId.value 作为依赖（和计算属性类似）。
  每当 todoId.value 变化时，回调会再次执行。
  有了 watchEffect()，我们不再需要明确传递 todoId 作为源值。
*/
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId2.value}`
  )
  data2.value = await response.json()
})

// 要手动的停止一个侦听器，需要使用watch或者watchEffect返回的函数
const unwatch = watch()
unwatch()

const unwatchEffect = watchEffect()
unwatchEffect()
</script>

<template>
  <button>{{ data }}</button>
  <br />
  <button>{{ data2 }}</button>
</template>