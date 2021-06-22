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
                    <span>1234条评论</span>
                    <div class='money'>
                        <b>￥200.00</b>起
                        <span>重庆·朝天门</span>
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
          lisList:[
              {
                  id:'01',
                  imgUrl:'https://n1-q.mafengwo.net/s18/M00/A8/D9/CoUBYGDQYSeAQHNvAA8MLvzDgL8350.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
                  site:'重庆·朝天门',
                  num:1221,
                  place:'重庆·朝天门'
              },{
                  id:'02',
                  imgUrl:'https://n1-q.mafengwo.net/s18/M00/A8/D9/CoUBYGDQYSeAQHNvAA8MLvzDgL8350.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
                  site:'重庆·黄角坪',
                  num:122,
                  place:'重庆·黄角坪'
              }
          ]
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