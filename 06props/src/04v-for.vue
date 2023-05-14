<script setup>
import { ref } from 'vue'

const arr = ref(["第一枪，相思","第二枪，断肠","第三枪，盲龙"])

const newArr= ref(["第四枪,风流"])

const i = ref(0)

const objArr = ref([
    {
        id:1,
        name:"111",
        age: 10
    },
    {
        id:2,
        name:"222",
        age: 18
    },
    {
        id:3,
        name:"333",
        age: 30
    },
])

const objNewObj = ref([{
    id: 4,
    name:"444",
    age:40
}])
</script>

<template>
{{ objArr }}
    <button @click="arr.push(newArr[i]);i++">push</button>
    <button @click="objArr.unshift(objNewObj[i])">unshift</button>

    <ul>
        <li v-for="(gun,index) in arr">{{ gun }}--{{ index+1 }}</li>
    </ul>
    <hr/>
    <ul>
        <li v-for="obj in objArr">{{ obj.id }}--{{ obj.age }}</li>
    </ul>

    <template v-for="obj in objArr">{{ obj }}</template>
    <hr/>
    <template v-for="{ id,name,age } in objArr" :key="id">{{ id }}</template>

</template>