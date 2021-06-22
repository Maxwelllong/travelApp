<!--hotcity-->
<template>
    <div class='hotcity'>
        <h5>热门城市</h5>
        <ul class='hot' >
            <li v-for="item in cityData" :key="item.id">{{item.name}}</li>
        </ul>
    </div>

</template>
<script>
export default {
    data() {
        return{
            cityData:[
                {
                    id:'01',
                    name:'北京'
                },{
                    id:'02',
                    name:'上海'
                },{
                    id:'03',
                    name:'成都'
                },{
                    id:'04',
                    name:'重庆'
                },{
                    id:'05',
                    name:'西安'
                },{
                    id:'06',
                    name:'兰州'
                },{
                    id:'07',
                    name:'呼和浩特'
                },{
                    id:'08',
                    name:'厦门'
                },{
                    id:'09',
                    name:'大理'
                }
            ]
        }
    },
    methods:{

    },
    
}
</script>
<style lang='less' scoped>
.hotcity{
    height:3rem;
    h5{
        padding:.15rem;
        font-size: .34rem;
        font-weight: lighter;
    }
    
}
.hot{
    background: rgba(255,255,255);
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3,33.33%);
    grid-auto-flow: row;
    border-bottom: 1px solid #ccc;
    li{
        height:1rem;
        // background:orange;
        font-size:.4rem;
        text-align: center;
        line-height: 1rem;
        border-left:1px solid #ccc;
        border-top: 1px solid #ccc;
    }
}
</style>