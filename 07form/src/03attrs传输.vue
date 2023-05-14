<script setup>
import { ref } from "vue";

import AddStu from "./components/AddStu.vue";

import StudentsList from "./components/StudentsList.vue"

const STU_ARR = ref([
    {
        id: 1,
        name: "Scout",
        age: 25,
        gender: "man",
        address: "KR"
    },
    {
        id: 2,
        name: "Rookie",
        age: 26,
        gender: "man",
        address: "KR"
    },
    {
        id: 3,
        name: "Doinb",
        age: 27,
        gender: "man",
        address: "KR"
    },
    {
        id: 4,
        name: "Xiaohu",
        age: 25,
        gender: "man",
        address: "CN"
    }
])

// 定义一个删除学生的方法
const deleteStuArrHander = (name,index) => {
        if(confirm("您确定要删除吗"+name+"")){
            STU_ARR.value.splice(index,1)
        }
    }

// 定义一个添加学生的方法
const addStuHander = (stu) => {
    const id = STU_ARR.value.at(-1) ? STU_ARR.value.at(-1).id + 1 : 1
    stu.id = id
    
    STU_ARR.value.push(stu)
}
</script>

<template>
    <!-- 
        可以将组件中的方法以自定义事件的形式传递给其他组件（看StudentsList组件）
     -->
    <StudentsList :students="STU_ARR" @del-stu="deleteStuArrHander"></StudentsList>
    <AddStu  @add-stu="addStuHander"></AddStu>
</template>

<style scoped></style>