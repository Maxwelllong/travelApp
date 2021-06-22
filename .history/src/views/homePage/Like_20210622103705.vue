<template>
    <div class='like'>
        <div class="like-top">
            <span>推荐攻略</span>
        </div>
        <div>
            <ul>
                <li>123</li>
            </ul>
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
.like{
    margin-top:.2rem;
    font-size:.4rem;
    background-color: #fff;
    .like-top{
        background-color: green;
        height:1rem;
        line-height:1rem;
        padding-left: .2rem;
        span{
            border:2px solid aqua;
        }
    }
}
</style>