<script setup>
// 引入vue方法
import { reactive } from 'vue'

// 引入组件
import TabList from './components/TabList.vue';
import Tab from './components/Tab.vue';

// 创建props所需要的数据
const players = reactive([
  {
    name: "梅西",
    img: "/images/messi.png",
    imgAlt: 'messi',
    rate: 1,
    hot: 433760
  },
  {
    name: "C罗",
    img: "/images/ronaldo.png",
    imgAlt: 'ronaldo',
    rate: 2,
    hot: 355450
  },
  {
    name: "内马尔",
    img: "/images/neymar.png",
    imgAlt: 'neymar',
    rate: 3,
    hot: 199948
  }
])

const teams = reactive([
  {
    name: "法国",
    img: "images/法国.jpg",
    imgAlt: '法国',
    hot: 38876,
    rate: 1
  },
  {
    name: "巴西",
    img: "images/巴西.jpg",
    imgAlt: '巴西',
    hot: 25874,
    rate: 2
  },
  {
    name: "荷兰",
    img: "images/荷兰.jpg",
    imgAlt: '荷兰',
    hot: 22793,
    rate: 3
  }
])

const maxPlayerHot = players[0].hot
const maxTeamHot = teams[0].hot
</script>

<template>
  <Tab>
    <template #0>
      <TabList :items="players" :max-hot="maxPlayerHot"></TabList>
    </template>

    <template #1>
      <TabList :items="teams" :max-hot="maxTeamHot"></TabList>
    </template>
  </Tab>
</template>

<style scoped></style>