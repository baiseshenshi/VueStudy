<script setup>
import { ref } from 'vue';

const emit = defineEmits(['addStu'])

// 创建一个存储新学生的变量
const newStu = ref({})

// 定义一个添加学生的方法
const addStuHander = () => {

    emit('addStu',Object.assign({},newStu.value))
    
    newStu.value.name = ""
    newStu.value.gender = ""
    newStu.value.age = ""
    newStu.value.address = ""
}
</script>

<template>
    <form @submit.prevent="addStuHander">
        <div>
            姓名：<input type="text" v-model.lazy="newStu.name" />
        </div>
        <div>
            性别：<input type="radio" name="gender" v-model="newStu.gender" value="男">男
            <input type="radio" name="gender" v-model="newStu.gender" value="女">女
        </div>
        <div>
            年龄：<input type="text" v-model.lazy="newStu.age" />
        </div>
        <div>
            住址：<input type="text" v-model.lazy="newStu.address" />
        </div>
        <div>
            <button type="submit">提交</button>
        </div>
    </form>
</template>