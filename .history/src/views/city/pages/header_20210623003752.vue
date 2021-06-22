<!--cityHeader-->
<template>
    <div class='header'>
        <div class='headerLeft' @click="goBack">
            <span class='iconfont'>&#xe624;</span>
        </div>
        <h3 class='cityChoice'>城市选择</h3>
    </div>
</template>
<script>
export default {
    data() {
      return{}
    },
    methods:{
        goBack(){
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
    .header{
        position:fixed;
        background: aqua;
        z-index:1000;
        width: 100%;
        font-size: .3rem;
        display: flex;
        padding: 0 .1rem;
        line-height: .88rem;
        color:gray;
    }
    .headerLeft{
        width: .4rem;
        padding:0 .2rem;
        font-weight: bold;
        text-align: center;
    }
    .cityChoice{
        font-size:.5rem;
    }
</style>