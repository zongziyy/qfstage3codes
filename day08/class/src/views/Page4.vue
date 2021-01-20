<template>
  <div class="list">
    <div class="list-tr">
      <div class="tr-item">商品名称</div>
      <div class="tr-item">商品价格</div>
      <div class="tr-item">商品数量</div>
    </div>

      <div class="list-tr" v-for="(item,index) in list" :key="index">
      <div class="tr-item">{{item.goodsname}}</div>
      <div class="tr-item">{{item.goodsprice}}</div>
      <div class="tr-item">{{item.goodsnum}}</div>
    </div>
  </div>
</template>
<style scoped>
    .list{
        width:300px;
        overflow: hidden;
    }
    .tr-item{
        float: left;
        width: 100px;
        height: 40px;
        background-color: black;
        color: burlywood;
        text-align: center;
        line-height: 40px;
    }
</style>
<script>
import  {mapState} from "vuex";
export default {
    computed:{
        ...mapState(["list"])
        // list(){
        //     return  this.$store.state.list
        // }
    }
};
</script>