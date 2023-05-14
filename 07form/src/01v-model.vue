<script setup>
import { ref } from 'vue'

const text = ref("100")
const bool = ref("yes")
const hobbies = ref([])
const gender = ref("man")
const friend = ref("")

function submitHandler() {
  console.log(text);
}
</script>

<template>
  <form @submit.prevent="submitHandler">

    <div>
      <input type="text" @input="(event) => { text = event.target.value }" />
    </div>
    <div>
      <!-- 双向数据绑定 -->
      <p>{{ text }}</p>
      <input type="text" v-model="text" />
    </div>
    <div>
      <input type="radio" v-model="text" />
    </div>
    <div>
      <p>{{ bool }}</p>
      yes or no:
      <input type="checkbox" v-model="bool" true-value="yes" false-value="no">
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
    <hr/>
    <div>
      <button>submit</button>
    </div>
  </form>
</template>

<style scoped></style>