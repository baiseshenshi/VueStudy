// 定义一个按钮组件
export default {
    data() {
        return {
            count: 0
        }
    },
    template: `
            <h2>子组件</h2>
            <button @click="count++">{{count}}</button>
            `
}