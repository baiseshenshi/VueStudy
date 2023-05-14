<script setup>
import { ref,provide } from "vue";

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
const deleteStuArrHander = (name, index) => {
    if (confirm("您确定要删除吗" + name + "")) {
        STU_ARR.value.splice(index, 1)
    }
}

// 定义一个添加学生的方法
const addStuHander = (stu) => {
    const id = STU_ARR.value.at(-1) ? STU_ARR.value.at(-1).id + 1 : 1
    stu.id = id

    STU_ARR.value.push(stu)
}

// 设置依赖
provide("name","丁真")
provide("students",STU_ARR)
provide("deleteStuByIndex",deleteStuArrHander)
</script>

<template>
    <!--     
    依赖注入
        -通过依赖注入，可以跨越多层组件传输数据
        步骤：
            1.设置依赖(provide)
            2.输入数据(inject)
     -->
    <StudentsList></StudentsList>
    <AddStu @add-stu="addStuHander"></AddStu>
</template>

<style scoped></style>