<!--home-->
<template>
    <div>
      <home-search></home-search>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-activity></home-activity>
    </div>
</template>
<script>
import homeSearch from './homePage/header-search.vue'
import homeSwiper from './homePage/Swiper.vue'
import homeIcons from './homePage/icons.vue'
import homeActivity from './homePage/activity.vue'

export default {
    components:{
      homeSearch,
      homeSwiper,
      homeIcons,
      homeActivity
    },
    data() {
        return{}
    },
    methods:{}
}
</script>
<style lang='less' scoped>

</style>