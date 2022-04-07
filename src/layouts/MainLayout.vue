<template>
  <h1><span>{{myStore.age}}</span></h1>
  <hr />
  <h1><span>{{age}}</span></h1>
  <h1><span>{{myStore.age20}}</span></h1>
  <hr />
  button: <button @click="change">修改</button>
</template>
<script lang="ts" setup>
  import {storeToRefs} from "pinia";
  import {userMyStore} from "../store";
  const myStore =  userMyStore()
  //这样解构不会响应式
  // const {age} = myStore
  const {age} = storeToRefs(myStore)

  const change = () => {
    //方式一直接修改
     myStore.age ++
    //方式二 使用$patch,批量更新
    myStore.$patch({
      age:myStore.age++
    })
    //方式三 $patch 函数批量更新
    myStore.$patch(state => {
      state.age++
      state.name='abc'
    })
    myStore.test()
  }


</script>

<style lang="scss">
</style>
