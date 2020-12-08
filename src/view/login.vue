<!--
 * @Author: your name
 * @Date: 2020-09-21 10:47:33
 * @LastEditTime: 2020-09-28 13:40:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /viteDemo/src/components/HelloWorld.vue
-->
<template>
  <div class="login" >
    <!-- 背景色块 -->
    <div class="login-colorLump">
    <!-- 头像 -->
    <van-image class="login-headImg" round width="100px" height="100px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <!-- 登录表单 -->
    <div class="login-form">
    <van-field v-model="phone" type="number" left-icon="wap-home-o" clearable placeholder="手机号"/>
    <van-field v-model="password" type="password"  left-icon="lock"  placeholder="密码"/>
    <van-button @click="login" type="primary" size="normal" class="login-button" block style="margin-top:25px">登录</van-button>
    <van-button @click="login" type="primary" size="normal" class="login-button" block style="backgroundColor:#ccc">注册</van-button>
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
    overflow: hidden;
    width: 100%;
    height: 100%;
    .login-colorLump{
      height: 200px;
      background-color:rgb(208, 193, 198);
      position: relative;
      .login-headImg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,50%);
      }
    }
    .login-form{
      margin-top: 70px;
      padding: 30px;
      .login-button{
        margin-top: 10px;
        border: none;
      }
    }
     
  }

</style>
