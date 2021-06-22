<!--home-->
<template>
    <div>
      <home-search></home-search>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-vaction></home-vaction>
    </div>
</template>
<script>
import homeSearch from './homePage/header-search.vue'
import homeSwiper from './homePage/Swiper.vue'
import homeIcons from './homePage/icons.vue'
import homeVaction from './homePage/vacation.vue'

export default {
    components:{
      homeSearch,
      homeSwiper,
      homeIcons,
      homeVaction
    },
    data() {
        return{}
    },
    methods:{}
}
</script>
<style lang='less' scoped>

</style>