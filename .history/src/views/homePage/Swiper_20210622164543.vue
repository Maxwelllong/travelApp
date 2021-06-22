<!--swiper组件-->
<template>
    <div class='headerSwiper'>
      <swiper :options="swiperOptions" >
            <swiper-slide v-for="item in swiperList" :key="item.id" class='swiper'>
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      
    </div>
</template>
<script>
export default {
    data() {
        return{
            "swiperList":[
                {
                    "id":"01",
                    "imgUrl":require("@/assets/img/swiper01.png")
                },{
                    "id":"02",
                    "imgUrl":require("@/static/mock/img/swiper01.png")
                },{
                    "id":"03",
                    "imgUrl":require("@/static/mock/img/swiper01.png")
                }
            ],
            swiperOptions:{
                pagination: {
                el: '.swiper-pagination',
            },
            loop:true,
            autoplay:true,
            },
            
        }
    },
    methods:{}
}
</script>
<style  scoped>
    .headerSwiper{
        background:#ccc;
        height:0;
        padding-bottom:56%;
        z-index:1;
    }
    .swiper img{
        width: 100%;
    }
    .headerSwiper >>> .swiper-pagination-bullet-active{
        background:#fff;
    }
</style>