<script setup>
import StudentItem from './StudentItem.vue';

</script>

<template>
    <table>
        <caption>学生列表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
        </thead>
        <StudentItem></StudentItem>
    </table>
</template>

<style scoped>
table {
    width: 50%;
    border-collapse: collapse;
}

caption {
    font-size: 30px;
    font-weight: bold;
}

th{
    border: 1px solid black;
    font-size: 24px;
    text-align: center;
}

</style>