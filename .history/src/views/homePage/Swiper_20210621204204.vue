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
                    imgUrl:require('@/assets/img/swiper01.png')
                }
            ],
        }
    },
    methods:{}
}
</script>
<style lang='less' scoped>

</style>