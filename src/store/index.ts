import {defineStore} from "pinia";

export const userMyStore = defineStore('my', {
    state: () => {
        return {
            name: 'admin',
            age: 0,
        }
    },
    getters: {
        //getters存在缓存
        age20(state) {
            console.log('age20调用了');//这里有缓存，多次调用，只会打印一次
            return state.age + 20;
        },
        //如果用了this，需要声明返回值类型，否则类型推断不出来
        age21():number {
            console.log('age20调用了');//这里有缓存，多次调用，只会打印一次
            return this.age + 20;
        }
    },
    actions: {
        test() {
            this.age = 21
        }
    }

})
