<!--
 * @Author: your name
 * @Date: 2020-09-21 10:47:33
 * @LastEditTime: 2020-10-10 11:03:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /viteDemo/src/App.vue
-->
<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
    @import url(./less/reset.less);
  *{
    box-sizing: border-box;
  }
  #app{
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
</style>