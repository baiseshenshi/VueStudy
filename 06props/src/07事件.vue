<script setup>
import { ref } from 'vue';

const count = ref(0)

function clickHandle(http){
    console.log(count.value);

    alert(http)
}

function boxHandle(event,msg){
    // 在原生的js中
    // 如果想阻止事件的冒泡。需要对事件对象进行操作
    event.stopPropagation()
    alert(msg)
}

function boxHandle2(msg){
    // 在Vue中，提供了事件修饰符来阻止事件的冒泡
    alert(msg)
}
</script>

<template>
    <button @click="count++">{{ count }}</button>
    <hr/>
    <!-- 
        这是Vue帮我们调用的
        参数由Vue帮我们传递，就是event.target
    -->
    <button @click="clickHandle">方法事件处理器</button>
    <hr/>
    <!-- 
        这是我们自己调用的 
        参数由我们自己传递
        在内联事件处理器中，要想访问事件对象，可以传递$event
    -->
    <button @click="clickHandle()">内联事件处理器</button>

    <hr/>

    <div id="box1" @click.stop="boxHandle2('box1')">
        <div id="box2" @click.stop="boxHandle2('box2')">
            <div id="box3" @click.stop="boxHandle2('box3')"></div>
        </div>
    </div>
</template>

<style scoped>
    #box1{
        width: 300px;
        height: 300px;
        background-color: green;
    }
    #box2{
        width: 200px;
        height: 200px;
        background-color: yellowgreen;
    }
    #box3{
        width: 100px;
        height: 100px;
        background-color: orange;
    }
</style>