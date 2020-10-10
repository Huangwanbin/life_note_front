<template>
  <div class="user">
      <div class="top_box">
          事件池：{{list}}
      </div>
      <input type="text" v-model="keys" placeholder="请输入商品名"><br>
      <input type="number" v-model="text" placeholder="请输入价格"><br>
      <button @click="onme">录入价格(发布)</button><br>
      <button @click="emitme">查询(订阅)</button><br>
      <button @click="removeone">重置价格(取消订阅)</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:{},
            text:'',
            keys:''
        }
    },
    methods:{
        on(key,fn){
            if (!this.list[key]) {
                this.list[key] =[]
            }
            this.list[key].push(fn)
        },
        emit(){
            let key = arguments[0]
            this.list[key].forEach(item=>{
                item.apply(this,arguments)
            })
        },
        remove(key,rm){
            let list = this.list[key]
            list.forEach((item,index)=>{
                if (rm==item) {
                    this.list[key].splice(index,1)
                }
            })
        },
        onme(){
            let text = this.text
            this.on(this.keys,this.log)
        },
        emitme(){
            this.emit(this.keys,this.text)
        },
        removeone(){
            let text = this.text
            this.remove(this.keys,this.log)
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
        input{
            height: 30px;
        }
    }
</style>
