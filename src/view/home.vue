<template>
    <div class="home">
        <battery />
    </div>
</template>

<script>
import battery from '../components/battery'
export default {
    name:'home',
    components:{
        battery
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .home {
        width: 100%;
        height: 100%;
    }
</style>