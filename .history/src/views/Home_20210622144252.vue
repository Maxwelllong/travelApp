<!--home-->
<template>
    <div class='bg'>
      <home-search></home-search>
      <home-swiper :swiperList='this.swiperList'></home-swiper>
      <home-icons></home-icons>
      <home-activity></home-activity>
      <home-like></home-like>
    </div>
</template>
<script>
import homeSearch from './homePage/header-search.vue'
import homeSwiper from './homePage/Swiper.vue'
import homeIcons from './homePage/icons.vue'
import homeActivity from './homePage/activity.vue'
import homeLike from './homePage/Like.vue'

export default {
    components:{
      homeSearch,
      homeSwiper,
      homeIcons,
      homeActivity,
      homeLike
    },
    data() {
        return{}
    },
    methods:{},
    mounted(){
      this.$http.get('http://localhost:8888/static/mock/data.json')
      .then((res)=>{
        const data = res.data.data[0]
        this.swiperList = data.swiperList
      })
    }
}
</script>
<style lang='less' scoped>
.bg{
  background-color: #f5f5f5;
}
</style>