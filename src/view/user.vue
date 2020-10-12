<template>
  <div class="user">
      <div class="top_box">
          事件池
      </div>
      <div class="input">
        <label for="first">商品名：</label><input id="first" type="text" v-model="keys" placeholder="请输入商品名">
      </div><br>
      <div class="input">
        <label for="second">价格：</label><input id="second" type="number" v-model="text" placeholder="请输入价格">
      </div><br>
      <div class="home">
        <label for="home">{{value}}</label><meter id="home" :value="value" min="0" max="100">2 out of 10</meter><button @click="value++">+</button> <button @click="value--">-</button><br>
      </div>
      <button @click="onme">录入价格(发布)</button><br>
      <button @click="emitme">查询(订阅)</button><br>
      <button @click="removeone">重置价格(取消订阅)</button>
  </div>
</template>

<script>
import event from '../api/event'
export default {
    data(){
        return{
            text: '',
            keys: '',
            value:0
        }
    },
    methods:{
        onme(){
            let text = this.text
            if (!this.text || !this.keys) return alert('请完善信息！')
            event.on(this.keys,this.log)
            console.log(event);
        },
        emitme(){
            event.emit(this.keys,this.text)
        },
        removeone(){
            let text = this.text
            event.remove(this.keys,this.log)
        },
        log(keys,text){
            console.log('今天',keys,'售价是',text,'元');
        }
    }
}
</script>

<style lang='less'>
    .user{
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: left;
        .input{
            line-height: 30px;
            display: flex;
            width: 100%;
            input{
                height: 30px;
                flex: 1;
            }
        }
        .home{
            display: flex;
            label{
                height: 30px;
                line-height: 30px;
            }
            #home{
                width: 200px;
                height: 30px;
            }
        }

    }
</style>
