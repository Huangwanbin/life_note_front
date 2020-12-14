<template>
  <div class="user">
      <img :src="userInfo.user_img||''" alt="">
      <p>姓名：{{userInfo.user_name||''}}</p>
      <p>手机号：{{userInfo.phone||''}}</p>
      <p>user_id：{{userInfo.user_id||''}}</p>
  </div>
</template>

<script>
import api from '/src/api/userApi.js'
export default {
    data(){
        return{
            userInfo: {}
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.$route.query.user_id);
        const { user_id } = this.$route.query
        api.getUserInfo({ user_id }).then(res=>{
            console.log(res);
            this.userInfo = res.data || {}
        })
    }
}
</script>

<style lang='less'>
    .user{
        padding: 50px 0 0 50px;
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
</style>
