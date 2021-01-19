<template>
   <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in  list" :key="item.id">
    <img :src="item.src"/>
  </van-swipe-item>
</van-swipe>
</template>
<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe-item {
       width: 100%;
       height: 150px;
  }
  .van-swipe-item img{
    width: 100%;
    height: 150px;
  }
</style>
<script>
export default {
    props:["list"]
}
</script>