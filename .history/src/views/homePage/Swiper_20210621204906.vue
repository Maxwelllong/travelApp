<!--swiper组件-->
<template>
    <div>
      <swiper :options="swiperOptions" >
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
    
    data() {
        return{
            swiperOptions:{},
            swiperList:[
                {
                    id:'01',
                    imgUrl:'src/assets/img/swiper01.png'
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

</style>