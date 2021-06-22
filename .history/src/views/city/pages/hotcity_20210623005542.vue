<!--hotcity-->
<template>
    <div class='hotcity'>
        <h5>热门城市</h5>
        <ul class='hot'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

</template>
<script>
export default {
    data() {
        return{}
    },
    methods:{}
}
</script>
<style lang='less' scoped>
.hotcity{
    h5{
        padding:.15rem;
        font-size: .4rem;
        font-weight: lighter;
    }
    
}
.hot{
        display: grid;
        grid-template-columns: repeat(3,33.33%);
        grid-template-rows: repeat(3,33.33%);
        li{
            background:orange;
        }
    }
</style>