<!--icon区域-->
<template>
    <div>
      <ul class='lis'>
            <li>
                <i><img src="" alt=""></i>
                <P>找攻略</P>
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
        li{
            width: 25%;
            height: 50%;
            i{
                display: inline-block;
                width: 1rem;
                height:1rem;
                margin-left: 25%;
                background: hotpink;
            }
            p{
                margin-left:25%;
                font-size: .3rem;
            }
        }
    }
    

</style>