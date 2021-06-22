<!--home-->
<template>
    <div>
      <home-search></home-search>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <div></div>
    </div>
</template>
<script>
import homeSearch from './homePage/header-search.vue'
import homeSwiper from './homePage/Swiper.vue'
import homeIcons from './homePage/icons.vue'

export default {
    components:{
      homeSearch,
      homeSwiper,
      homeIcons,
    },
    data() {
        return{}
    },
    methods:{}
}
</script>
<style lang='less' scoped>

</style>