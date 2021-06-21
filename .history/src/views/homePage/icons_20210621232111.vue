<!--icon区域-->
<template>
    <div>
      <ul class='lis'>
            <li v-for="item in iconUrl" :key="item.id">
                <i><img :src="item.iconImg"></i>
                <P>找攻略</P>
            </li>
      </ul>
    </div> 
</template>
<script>
export default {
    data() {
        return{
            iconUrl:[
                {
                    id:'01',
                    iconImg:require('@/assets/img/piao.png')
                },{
                    id:'02',
                    iconImg:require('@/assets/img/piao.png')
                }
            ]
        }
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
            background: requier('@/assets/img/i_nav.png');
            background-size: .5;
            i{
                display: inline-block;
                width: .8rem;
                margin-top:10%;
                height:.8rem;
                margin-left: 30%;
                border-radius: .1rem;
                background-position:0 0;
                img{
                    width: 100%;
                    height:100%;
                }
            }
            p{
                margin-top:-.1rem;
                margin-left:25%;
                font-size: .3rem;
            }
        }
    }
    

</style>