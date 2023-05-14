import { defineStore } from "pinia";

export const useStudentStore = defineStore('student',{
    state: () => ({
        name: "Tom",
        age: 18,
        gender: "man",
        skill: ['七十二变','筋斗云']
    }),
    getters: {
        title: (state) => {
            return 'Mr.' + state.name
        }
    },
    actions: {
        growUp(){
            this.age++
        }
    }
})