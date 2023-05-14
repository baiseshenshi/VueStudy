<script>
  import MyButton from './components/MyButton.vue';
  // 引入浅层响应的
  import { shallowReactive } from "vue"

  export default{
    data(){
      // return{
      //   msg: "今天想学习Vue3",
      //   stu: {
      //     name: "Tom sun",
      //     age: 18,
      //     address: "China",
      //     // 深层响应式数据，data中的数据默认是深层响应的
      //     // 在一个比较大的项目中，这种深层响应的数据可能会对性能有所影响
      //     friend: {
      //       first: "Ez"
      //     }
      //   }
      // },

      // 浅层响应的数据，但是依然可以使用，只是不能深层响应
      return shallowReactive({
        msg: "今天想学习Vue3",
        stu: {
          name: "Tom sun",
          age: 18,
          address: "China",
          friend: {
            first: "Ez"
          }
        },
        hello: null
      })
    },
    components:{
      MyButton
    }
  }

</script>

<template>

  <h1>{{ msg }}</h1>
  <h2>{{ stu.name }}--{{ stu.age }}--{{ stu.address }}</h2>
  <h3>{{ stu.friend.first }}</h3>
  <hr/>
  <h4>{{ hello }}</h4>
  <hr/>
  <MyButton></MyButton>
  <MyButton></MyButton>
  <MyButton></MyButton>
  <MyButton></MyButton>
</template>