<!--
 * @Author: your name
 * @Date: 2020-09-21 10:47:33
 * @LastEditTime: 2020-09-28 13:40:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /viteDemo/src/components/HelloWorld.vue
-->
<template>
  <div class="hello-world">
    <button class="btn1" @click="startRecive">录制</button>
    <button class="btn2" @click="videoGo">播放</button>
    <video autoplay controls id="stream"></video>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,

    }
  },
  methods:{
    startRecive(){
      let _this = this
      let constraints = {audio: false, video: true}; 
      let video = document.getElementById('stream')
      console.log(video.pause);
      navigator.getUserMedia(constraints, function(stream) {
          video.srcObject = stream;
          window.stream = stream;
      }, function(err) {
          console.log(err)
      })
    },
    videoGo(){
      let video = document.getElementById('stream')
      video.pause();
    }
  },
  mounted(){
  }
}
</script>

<style lang="less">
  .hello-world{
    width: 100%;
      #stream{
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
      }
  }

</style>
