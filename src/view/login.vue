<!--
 * @Author: your name
 * @Date: 2020-09-21 10:47:33
 * @LastEditTime: 2020-09-28 13:40:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /viteDemo/src/components/HelloWorld.vue
-->
<template>
  <div class="login">
    
    <van-field v-model="phone" type="number" label="手机号" />
    <van-field v-model="password" type="password" label="密码" />
    <van-button @click="login" type="primary" size="small">登录</van-button>
  </div>
</template>

<script>
import api from '../api/userApi.js'
export default {
  name: 'login',
  component:{
  },
  props: {
    msg: String
  },
  data() {
    return {
      phone: 'null',
      password:''
    }
  },
  methods:{
    login(){
      let {phone,password} = this
      api.login({phone,password}).then(res=>{
        console.log(res);
        let msg = ''
        if (res.code==200) {
            msg = '登录成功'
        }else {
           msg = res.msg || '登录失败!'
        }
        this.$toast(msg)
      })
    }
  },
  mounted(){
  }
}
</script>

<style lang="less">
  .login{
    width: 100%;
     
  }

</style>
