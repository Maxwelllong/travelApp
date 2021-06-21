<!--icon区域-->
<template>
    <div>
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
    .lis{
      width: 100%;
      height:3rem;
      background: green;
    }
    .lis li{
        width: 25%;
        height:50%;
        background: gold;
        i{
            display: block;
            width: 1rem;
            height: 1rem;
            background:hotpink
        }
    }

</style>