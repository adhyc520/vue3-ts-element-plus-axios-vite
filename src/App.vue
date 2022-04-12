<template>
  <router-view></router-view>
</template>
<script lang="ts" setup>
// import {loginApi} from './api/userApi'
// loginApi({
//   userName:'abc',
//   password:'bcd',
//   code:'123'
// }).then((res) => {
//   console.log(res)
// })

</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: hidden;
}
</style>
