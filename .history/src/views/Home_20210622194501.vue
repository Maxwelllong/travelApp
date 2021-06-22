<!--home-->
<template>
    <div class='bg'>
      <home-search></home-search>
      <home-swiper ></home-swiper>
      <home-icons ></home-icons>
      <home-activity ></home-activity>
      <home-like ></home-like>
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
        return{
         
        }
    },
    methods:{},
    mounted(){
     this.$http.get(`localhost:8080/mock/Hdata.json`)
     .then((res)=>{
       console.log(res);
     })
   }
}
</script>
<style lang='less' scoped>
.bg{
  background-color: #f5f5f5;
}
</style>