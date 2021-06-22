<template>
    <div class='like'>
        <div class="like-top">
            <span>推荐景点</span>
        </div>
        <ul class='ulStyle'>
            <li class='lis' v-for="item in lisList" :key="item.id">
                <img :src="item.imgUrl" >
                <div class='info'>
                    <h4>{{item.site}}</h4>
                    <span>{{item.num}}条评论</span>
                    <div class='money'>
                        <b>￥{{item.money}}</b>起
                        <span>{{item.place}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
      return{
          
      }
    },
    methods:{}
}
</script>
<style lang='less' scoped>
.like{
    margin-top:.2rem;
    font-size:.4rem;
    background-color: #fff;
    .like-top{
        height:1rem;
        line-height:1rem;
        padding-left: .2rem;
        span{
            border-left:6px solid aqua;
            padding-left: .1rem;
        }
    }
}

.lis{
    display: flex;
    bottom:1px solid #ccc;
    padding-top:.1rem;
}
.lis img{
    width: 3rem;
}
.info{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.lis .info{
    margin-left: .2rem;
}
.money{
    width: 100%;
    position: relative;
    font-size:.3rem;
    b{
        color:orange;
        font-size:.4rem;
    }
    span{
        position:absolute;
        right:.4rem;
        bottom:0;
    }
}
</style>