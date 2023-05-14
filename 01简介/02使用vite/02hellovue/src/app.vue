<script>
    import myButton from './components/myButton.vue';

    // 编写组件代码
    export default{
        data(){
            return{
                msg: "Volar"
            }       
        },
        components:{
            myButton
        }
    }
</script>

<template>
    <h1>{{ msg }}</h1>
    <myButton></myButton>
</template>