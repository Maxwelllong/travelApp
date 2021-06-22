<!--activity-->
<template>
    <div>
      <div class='box'>
          <div class="left">
              <div>
                  <p>门票特卖</p>
                  <span>天天好价</span>
              </div>
              <img src="src/assets/img/miss.png" alt="">
          </div>
          <div class="right">
              <div>
                  <p>暑期大促</p>
                  <span>天天好价</span>
              </div>
              <img src="src/assets/img/miss.png" alt="">
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
    background: aqua;
    border-top:1px solid #ccc;
    margin-top:.2rem;
    display: flex;
}
.left{
    width: 50% ;
    border-right:1px solid #ccc;
    padding:.3rem;
    p{
        font-size: .5rem;
        // display: inline-block;
        color:red;
        line-height: .5rem;
    }
    span{
        font-size:.3rem;
    }
}
.right{
    width: 50% ;
    border-right:1px solid #ccc;
    p{
        font-size: .5rem;
        // display: inline-block;
    }
    span{
        font-size:.3rem;
    }
}
</style>