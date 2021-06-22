<!--hotcity-->
<template>
    <div class='hotcity'>
        <h5>热门城市</h5>
        <ul class='hot' v-for="item in cityData" :key="item.id">
            <li>{{item.data}}</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

</template>
<script>
import cityData from '/src/assets/city.json'
export default {
    data() {
        return{
            cityData:''
        }
    },
    methods:{

    },
    mounted(){
        this.cityData = cityData
    }
}
</script>
<style lang='less' scoped>
.hotcity{
    h5{
        padding:.15rem;
        font-size: .34rem;
        font-weight: lighter;
    }
    
}
.hot{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3,33.33%);
    grid-row-gap: 0.1rem;
    grid-column-gap: 0.1rem;
    li{
        height:1rem;
        background:orange;
    }
    }
</style>