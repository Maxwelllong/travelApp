<!--swiper组件-->
<template>
    <div>
      <swiper :options="swiperOptions">
            <swiper-slide>Slide 1</swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
    swiperList:[
        {
            id:'01',
            imgUrl:''
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