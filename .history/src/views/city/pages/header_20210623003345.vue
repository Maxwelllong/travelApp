<--cityHeader-->
<template>
    <div class='header'>
        <div class='headerLeft'>
            <span class='iconfont'>&#xe6c2;</span>
        </div>
        <div class='headerSearch'>
            <span>输入城市/景点/游玩主题</span>
        </div>
        <div class='headerRight' @click="toCity">
            <span>北京<i class='iconfont'>&#xe66e;</i></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return{}
    },
    methods:{
        toCity(){
            this.$router.push('/tocity')
        }
    }
}
</script>
<style scoped>
    .header{
        position:fixed;
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
    .headerSearch{
        flex:1;
        background: #fff;
        height: 0.8rem;
        margin:.1rem 0;
        border-radius: .5rem;
        line-height: .8rem;
        padding-left: .5rem;
        color:#eee;
    }
    .headerRight{
        width: 1rem;
        padding:0 .1rem;
    }
</style>