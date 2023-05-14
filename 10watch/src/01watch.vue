<script setup>
import { watch,ref } from 'vue';
import { reactive } from 'vue';
/* 
  watch侦听器，侦听响应式数据
    但只会浅层侦听，因为watch是懒侦听
    在侦听对象属性时，要提供getter方法
    不会侦听到对象属性改变，除非整个属性都被改变

  使用deep:true切换深层侦听
    可以侦听到对象属性的变化，但只能对reactive代理的数据有效，ref代理的无效

  immediate:true
  立即执行侦听器
*/ 


const message = ref({
  onload: 10
})

const number = reactive({
  count: 1
})
const current = ref(1000)

// 传递的第一个是侦听的对象，第二个是回调函数
// 回调函数的参数分别是新值和旧值
watch(() => message.onload,(newmessage,oldmessage) => {
  console.log(111);
},
{deep:true})// 对ref代理的数据无效

watch(current,() => {
  console.log(222);
})

watch(() => number.count,(newCount,oldCount) => {
  console.log(333);
  console.log(newCount,oldCount);
},{deep:true})

watch(current,() => {
 console.log(444);
},{immediate:true})
</script>

<template>
<button @click="message.onload = current">{{ message.onload }}</button>
<br/>
<button @click="current = 100">{{ current }}</button>
<br/>
<button @click="number.count = 0">{{ number.count }}</button>
</template>