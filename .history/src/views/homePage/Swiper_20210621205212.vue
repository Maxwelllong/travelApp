<!--swiper组件-->
<template>
    <div>
      <swiper :options="swiperOptions" >
            <swiper-slide v-for="item in swiperList" :key="item.id" class='swiper'>
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
    
    data() {
        return{
            swiperOptions:{
                pagination: {
                el: '.swiper-pagination',
                style:fetch
            },
            },
            swiperList:[
                {
                    id:'01',
                    imgUrl:require('@/assets/img/swiper01.png')
                },{
                    id:'02',
                    imgUrl:require('@/assets/img/swiper02.png')
                }
            ],
        }
    },
    methods:{}
}
</script>
<style lang='less' scoped>
    .swiper img{
        width: 100%;
    }
</style>