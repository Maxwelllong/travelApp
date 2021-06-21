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
    }
    .headerLeft{
        width: 0.4rem;
        padding:0 .2rem;
        text-align: center;
        font-weight: bold;
    }
    .headerSearch{
        flex:1;
        background: #fff;
    }
</style>