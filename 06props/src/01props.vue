<script setup>
  import {ref} from 'vue'
  import MyBox from './components/MyBox.vue';

  /* 
    父组件可以通过props来向子组件传递数据
    这些传递的数据都是只读的(单向数据流)
    即使能修改也尽量不要修改
  */
//  const count = ref(0)
const obj = ref({
  count: 0
})
</script>

<template>
  <h1>我是App根组件</h1>
  <h1>{{ obj.count }}</h1>
  <button @click="obj.count++">App</button>
  <MyBox :obj="obj"></MyBox>
</template> 