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
  </div>
  <div class="login-bottom">
    <!-- 更多（注册，忘记密码） -->
    <div style="position: relative;margin-top:15px;padding-bottom:45px;">
      <span @click="register" style="font-size:14px;color:rgb(208, 193, 198);position: absolute;left:0;">注册</span>
      <span @click="forget" style="font-size:14px;color:rgb(208, 193, 198);position: absolute;right:0;">忘记密码</span>
    </div>
    <!-- 第三方快捷登录 -->
    <div>
      <img src="../assets/img/weChat.jpg" alt="" >
      <img src="../assets/img/QQ.gif" alt="" >
      <img src="../assets/img/weChat.jpg" alt="" >
    </div>
  </div>
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
    // 登录
    login(){
      let {phone,password} = this
      api.login({phone,password}).then(res=>{
        console.log(res);
        let msg = ''
        if (res.code==200) {
            msg = '登录成功'
            this.$router.push({
              name:'user',
              query:{
                user_id: res.data.user_id || 0
              }
            })
        }else {
           msg = res.msg || '登录失败!'
        }
        this.$toast(msg)
      })
    },
    // 注册
    register(){
      alert('注册')
    },
    forget(){
      alert('改密码')
    }
  },
  mounted(){
  }
}
</script>

<style lang="less">
  .login{
    width: 100%;
    height: 100%;
    // background-color: rgb(236, 233, 233);
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
      padding-left: 30px;
      padding-right: 30px;
      .login-button{
        margin-top: 10px;
      }
    }
    .login-bottom{
      padding-left: 30px;
      padding-right: 30px;
      img{
      width: 50px;
      height: 50px;
      margin-left: 40px;
      }
    }
  }

</style>
