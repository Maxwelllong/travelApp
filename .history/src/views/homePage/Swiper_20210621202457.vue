<!--swiper组件-->
<template>
    <div>
      <swiper :options="swiperOptions">
            <swiper-slide></swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
    swiperList:[
        {
            id:'01',
            imgUrl:'/img/swiper01.png'
        }
    ],
    data() {
        return{}
    },
    methods:{}
}
</script>
<style lang='less' scoped>

</style>