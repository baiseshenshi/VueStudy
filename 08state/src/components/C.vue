<script setup>
import { inject } from 'vue'
import { useStudentStore } from '../store/studentStore';
import { storeToRefs } from 'pinia';
// const {count,increment} = inject("count")

const studentStore = useStudentStore()
/* 
   store解构 
        store实例本身是一个reactive对象，所以数据是响应式的
        如果直接把数据解构出来
        const { name,age } = studentStore
        那么就会丧失响应性
        使用storeToRefs方法可以解构出来响应式数据，解构成ref属性
        能够解构pinia中的数据和计算属性，但不能解构方法

    store修改
        1.直接修改和通过actions修改
            因为数据是响应式的
        2.通过$patch修改
        3.直接通过$state修改
        4.$reset修改
            重置回原来的数据

*/
const { name,age,title,skill } = storeToRefs(studentStore)

const patchHander = () => {
    // 相当于直接替换一个state
    // 可以传递回调函数修改
    // studentStore.$patch({
    //     name:"Jack",
    //     age: 25,
    //     skill: ["救命毫毛"]
    // })
    // studentStore.$patch((state) => {
    //     state.skill.push("123456")
    // })
    // studentStore.$state = { name:"永恩" }
}
/* 
    store订阅
        当store中的state发生变化时，做一些响应的操作
*/
// 这个订阅会随着组件的卸载而失效，添加配置{detached: true}组件卸载也生效
studentStore.$subscribe((mutation,state) => {
    console.log("变了");
    // mutation中是一些修改的数据
    console.log(mutation);
    console.log(mutation.payload);
    // 在订阅中修改，会导致再次触发订阅，形成递归、死循环
    // 所以不要在订阅中修改
    // state.age++
},{detached: true})

// 订阅actions执行就会触发
studentStore.$onAction(({after,args,name,onError,store}) => {
    /* 
        name 调用方法的名字
        args actions收到的参数
        store store实例
        after 可以设置一个回调函数调用成功后触发
        onError 可以设置一个回调函数调用失败后触发
    */
})
</script>

<template>
    C -- {{ title }} 
    <br/>
    {{ studentStore.name }}--{{ name }}--{{ age }}--{{ skill }}

    <h3>C组件
        <button @click="studentStore.growUp">发育</button>
        <br/>
        <button @click="patchHander">patch修改</button>
        <button @click="studentStore.$reset">$reset</button>
    </h3>
</template>