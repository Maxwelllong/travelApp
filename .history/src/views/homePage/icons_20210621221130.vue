<!--icon区域-->
<template>
    <div class='icons'>
      <ul class='lis'>
            <li>
                <i></i>
                <span>找攻略</span>
            </li>
      </ul>
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
<style lang='less' scoped>
    .icons{
        height: 3rem;
        width: 100%;
        background: forestgreen;
    }
    .lis{
       width: 25%;
       height: 50%;
       background: fuchsia;
    }
    .lis li{
        width: 25%;
        height:50%;
        background: gold;
    }
</style>