<script setup>
function boxHandle(text){
    alert(text)
}
</script>

<template>
    <!-- 
        事件修饰符
            -stop 停止事件的冒泡
            -capture 让事件在捕获的阶段触发
            -prevent 取消事件的默认行为
            -self 仅当 event.target 是元素本身时才会触发事件处理器
            -once 绑定一个一次性的事件
            -passive 主要用来提升滚动事件的性能
            
     -->
    <div id="box1" @click.stop.once="boxHandle('box1')">
        <div id="box2" @click.stop="boxHandle('box2')">
            <div id="box3" @click.stop="boxHandle('box3')"></div>
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