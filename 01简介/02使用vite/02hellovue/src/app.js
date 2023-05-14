// 引入子组件
import myButton from "./components/myButton"

export default{
    data(){
        return{
            message: "Hello vue",
        }
    },
    // 注册子组件
    components:{
        // 以属性的形式使用也可以
        // mB:myButton
        myButton
    },
    /* 
        template是用string的形式在编写模板
            1.这些字符串会在项目运行中，在游览器中被编译成字符串(性能不好)
            2.在字符串编写代码，体验很差
        为了解决这个问题，Vue提供了SFC(单文件组件)
        游览器无法解析SFC，需要用构建工具打包后，才能使用
    */
    template: `
        <h1>{{message}}</h1>
        <myButton/>
    `
}