<template>
  <div>
    <div class="item" v-for="item in shoppingcarList" :key="item.id">
        
    <van-checkbox v-model="item.ischecked">复选框</van-checkbox>
   
      <van-card
        :num="item.buynum"
        :price="item.goodsprice"
        :title="item.goodsname"
        :thumb="item.goodsimg"
      >
        <template #footer>
          <van-button size="mini" class="mybtn" @click="changeNum(item, -1)"
            >-</van-button
          >
          <van-button size="mini" class="mybtn" @click="changeNum(item, 1)"
            >+</van-button
          >
        </template>
      </van-card>
    </div>
    <button @click="gotoPay">结算</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import shoppingCarModel from "../model/shoppingCarModel";
export default {
    data(){
        return  {
            check:true
        }
    },
  computed: {
    ...mapState(["shoppingcarList"]),
  },

  created() {
    let userid = window.localStorage.getItem("userid");
    shoppingCarModel.query({ userid }).then((res) => {
        this.initShoppingCarList(res.data.map(item=>{
            item.ischecked = false;
            return  item;
        }));
      });
 
  },
  methods: {
    ...mapMutations(["initShoppingCarList","updateShoppingCarList"]),
    gotoPay(){
        this.$router.history.push("/pay");
    },
    changeNum(item, n) {
      if (item.buynum <= 1 && n < 0) {
        //加法中的数量为1  不能继续减少
        alert("数量为1  不能继续减少");
      } else {
        shoppingCarModel
          .update(item.id, { buynum: item.buynum + n })
          .then(() => {//更新成功
         // console.log(item.id,n);
                this.updateShoppingCarList({id:item.id,n});
          });
      }
    },
  },
};
</script>
