<!--home-->
<template>
    <div class='bg'>
      <home-search></home-search>
      <home-swiper :swiperList='swiperList'></home-swiper>
      <home-icons :iconUrl = 'iconUrl'></home-icons>
      <home-activity ></home-activity>
      <home-like :lisList='lisList'></home-like>
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
          swiperList:[],
          iconUrl:[],
          lisList:[]
        }
    },
    methods:{},
    mounted(){
      this.$http.get('http://localhost:8888/static/mock/data.json')
      .then((res)=>{
        const data = res.data;
        console.log(data);
        this.swiperList = data.swiperList;
        this.iconUrl = data.iconUrl;
        this.lisList = data.lisList;
      })
    }
}
</script>
<style lang='less' scoped>
.bg{
  background-color: #f5f5f5;
}
</style>