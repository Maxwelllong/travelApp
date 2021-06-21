<!--icon区域-->
<template>
    <div>
      <ul class='lis'>

            <!-- <li v-for="item in iconUrl" :key="item.id">
                <i><img :src="item.iconImg"></i>
                <P>找攻略</P>
            </li> -->
            <swiper :options="swiperOptions" >
                <swiper-slide v-for='pages in page' :key='pages.id'>
                    <li >
                        <i> <img ></i>
                        <p></p>
                    </li>
                </swiper-slide>
            </swiper>
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
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'02',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'03',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'04',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'05',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'06',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'07',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'08',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'09',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略'
                },{
                    id:'10',
                    iconImg:require('@/assets/img/piao.png'),
                    title:'找攻略' 
                }
            ],
            swiperOptions:{}
        }
    },
    methods:{},
    computed: {
        // 直接当做普通属性调用不加括号
        // 任何data中数据变化立即重新计算
        // 计算属性会缓存
        page(){
            let pages = [];
            this.iconUrl.forEach((item,index) => {
                console.log(item);
                let num = Math.floor(index/8);
                if(!pages[num]) pages[index]=[];
                pages[num].push(item) ; 
            });

            return pages;
        }
    },
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