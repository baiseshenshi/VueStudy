<script>

  export default{
    // data是一个函数，vue给data绑定了一个this，这个this就是组件实例vm
    // 不能使用箭头函数，因为箭头函数的this是data本身
    // 在Vue中尽量不使用箭头函数

    data(){
    /* 
      this.name = "Tom Sun"
      向data中直接绑定的数据不是响应式数据
      返回的对象中的数据才是响应式数据
    */
      return{
        msg: "Vue"
      }
    }
  }

</script>

<template>

  <h1>{{ msg }}</h1>

</template>