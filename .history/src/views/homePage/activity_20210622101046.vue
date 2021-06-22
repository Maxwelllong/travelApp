<!--activity-->
<template>
    <div>
      <div class='box'>
          <div class="left">
              <div class='slogan'>
                  <p>门票特卖</p>
                  <span>天天好价</span>
              </div>
              <img src="@/assets/img/miss.png" alt="">
          </div>
          <div class="right">
              <div class='slogan'>
                  <p>暑期大促</p>
                  <span>天天好价</span>
              </div>
              <img src="@/assets/img/off.png" alt="">
          </div>
      </div>
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
.box {
    width: 100%;
    height:2rem;
    background: #fff;
    border-top:1px solid #ccc;
    margin-top:.2rem;
    display: flex;
}
.left{
    width: 50% ;
    border-right:1px solid #ccc;
    padding:.3rem;
    display: flex;
    border-bottom: 1px solid #ccc;

    img{
        width: 40%;
        height: 2rem;
        margin-top:-20px;
        margin-left: 10px;
    }
}
.slogan{
    width: 60%;
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: start;
    p{
        font-size: .4rem;
        color:red;
        height:.5rem;
        line-height: .5rem;
    }
    span{
        font-size:.3rem;

    }
}

.right{
   width: 50% ;
    padding:.3rem;
    display: flex;
    border-bottom: 1px solid #ccc;
    img{
        width: 40%;
        height: 1rem;
        margin-left: 10px;
    }
}
</style>