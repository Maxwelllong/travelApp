<!--city-->
<template>
    <div class='city'>
        <city-header></city-header>
        <city-hot></city-hot>
    </div>
</template>
<script>
import cityHeader from './pages/header.vue'
import cityHot from './pages/hotcity.vue'

export default {
    components:{
        cityHeader,
        cityHot
    },
    data() {
        return{}
    },
    methods:{}
}
</script>
<style lang='less' scoped>
.city{
    background:#ccc;
}
</style>