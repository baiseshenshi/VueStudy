<script setup>
import { ref } from 'vue'

const text = ref("please input")
const hobbies = ref([])
const gender = ref("man")
const friend = ref("")

function print(){
  console.log(text.value);
}
</script>

<template>
  <form @submit.prevent="print">
    <div>
      <!-- 
        v-model也可以添加修饰符
          -lazy 使用change来修饰事件
          -trim 去除前后的空格
          -number 将数据转换成数值
       -->
      <p>{{ text }}</p>
      <input type="text" v-model.trim="text" />
    </div>
    <div>
      <p>{{ hobbies }}</p>

      <input type="checkbox" v-model="hobbies" name="hobby" value="足球">足球
      <input type="checkbox" v-model="hobbies" name="hobby" value="篮球">篮球
      <input type="checkbox" v-model="hobbies" name="hobby" value="羽毛球">羽毛球
    </div>
    <div>
      <p>{{ gender }}</p>
      <input type="radio" name="gender" v-model="gender" value="man">man
      <input type="radio" name="gender" v-model="gender" value="woman">woman
    </div>
    <div>
      <p>{{ friend }}</p>
      <select v-model="friend">
        <option value="" disabled>请选择你的朋友</option>
        <option>Doinb</option>
        <option>Tian</option>
        <option>Switf</option>
      </select>
    </div>
    <hr />
    <div>
      <button>submit</button>
    </div>
  </form>
</template>

<style scoped></style>