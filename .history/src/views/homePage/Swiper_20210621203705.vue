<!--swiper组件-->
<template>
    <div>
      <swiper :options="swiperOptions" >
            <swiper-slide v-for="item in swiperList" :key="item.id">{{item.imgUrl}}</swiper-slide>
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
                    imgUrl:'static/img/swiper01.png'
                },{
                    id:'02',
                    imgUrl:'/img/swiper02.png'
                }
            ],
        }
    },
    methods:{}
}
</script>
<style lang='less' scoped>

</style>