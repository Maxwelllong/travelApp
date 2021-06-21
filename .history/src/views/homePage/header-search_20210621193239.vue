<template>
    <div class='header'>
        <div class='headerLeft'>
            <span class='iconfont'>&#xe6c2;</span>
        </div>
        <div class='headerSearch'>
            <span>输入城市/景点/游玩主题</span>
        </div>
        <div class='headerRight'>
            <span>北京 <i class='iconfont'>&#xe66e;</i></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return{}
    },
    methods:{}
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: 3rem;
        color:#fff;
        background: aqua;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .headerLeft{
        width: 1rem;
        height:3rem;
        line-height: 3rem;
        padding:0 .2rem;
        text-align: center;
        font-weight: bold;
    }
    .headerSearch{
        flex:1;
        background: #fff;
        height:2rem;
        line-height: 2rem;
        margin:.5rem 0;
        color:#ccc;
        border-radius: .3rem;
        padding-left: 1rem;
    }
    .headerRight{
        height:3rem;
    }
</style>