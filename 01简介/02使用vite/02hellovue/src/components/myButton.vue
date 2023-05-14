<script>

export default{
    data(){
        return{
            count: 0
        }
    }
}

</script>

<template>
    <h2>子组件</h2>
    <button @click="count++">{{ count }}</button>
</template>