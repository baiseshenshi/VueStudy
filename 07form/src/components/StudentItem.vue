<script setup>
import { inject } from 'vue';

// const props = defineProps(['students'])
// const emit = defineEmits(['delStu'])

// const deleteStuHander = (name, index) => {
//     emit('delStu', name, index)
// }
const deleteStuByIndex = inject("deleteStuByIndex")

const name = inject("name")

const students = inject("students")

const deleteStuHander = (name, index) => {
    deleteStuByIndex(name, index)
}
</script>

<template>
    <tbody>
        <tr v-for="(student, index) in students">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.address }}</td>

            <!-- 
                    在模板中，可以通过$emit()的形式来触发自定义事件
                    <td>
                        <a href="#" @click.prevent="$emit('del-stu',index,$event)">
                            删除
                        </a>
                    </td>
                 -->
            <td>
                <a href="#" @click.prevent="deleteStuHander(student.name, index)">
                    删除
                </a>
            </td>
        </tr>
    </tbody>
</template>

<style scoped>
td {
    border: 1px solid black;
    font-size: 24px;
    text-align: center;
}

td>a {
    color: rgb(171, 71, 71);
    text-decoration: none;
}
</style>