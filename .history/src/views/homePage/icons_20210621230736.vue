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
        // background: green;
        li{
            width: 25%;
            height: 50%;
            overflow: hidden;
            float:left;
            background: url('./src/assets/img/i_nav.png');
            background-size: .5;
            i{
                display: inline-block;
                width: .8rem;
                margin-top:10%;
                height:.8rem;
                margin-left: 30%;
                border-radius: .1rem;
                background-position:0 0;
            }
            p{
                margin-top:-.1rem;
                margin-left:25%;
                font-size: .3rem;
            }
        }
    }
    

</style>