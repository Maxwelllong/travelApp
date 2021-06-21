<!--home-->
<template>
    <div>
      <home-search></home-search>
      <home-swiper></home-swiper>
    </div>
</template>
<script>
import homeSearch from './homePage/header-search.vue'
import homeSwiper from './homePage/Swiper.vue'

export default {
    components:{
      homeSearch,
      homeSwiper
    },
    data() {
        return{}
    },
    methods:{}
}
</script>
<style lang='less' scoped>

</style>