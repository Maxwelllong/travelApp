<!--icon区域-->
<template>
    <div class='icons'>
      <ul class='lis'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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
    .icons{
        height: 3rem;
        width: 100%;
        background: forestgreen;
    }
    .lis{

    }
    .lis li{
        width: 0.5rem;
        height: 0.5rem;
        background:red;
    }
</style>