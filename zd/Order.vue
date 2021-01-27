<template>
  <div class="shoppingcar">
    <van-nav-bar
      title="我的购物车"
      left-text="返回"
      @click-left="onClickLeft"
      class="head"
    />
    <div
      class="shoppingcarItems"
      v-for="(item, index) in userWantBuylist"
      :key="index"
      @click="selectCheckOne(index)"
    >
      <van-swipe-cell>

        <div class="shoppingcarItem">
          <div class="shoppingcarItemLeft">
        
            <img
              class="shoppingcarItemImg"
              :src="item.userShopItem.src"
              alt=""
            />
          </div>
          <div class="shoppingcarItemRight">
            <p class="name">{{ item.userShopItem.name }}</p>
            <p class="addr">发货地址:{{ item.userShopItem.sellAddress }}</p>
            <div class="item_foot">
              <p class="price">共计:¥{{ item.userShopItem.price*item.element.buynum }}</p>
              <div class="countNum">
               <div class="buynum">共x{{item.element.buynum}}件</div>
              </div>
            </div>
          </div>
        </div>

        
      </van-swipe-cell>
    </div>

    
 

    <div class="settlement">
      <span class="qx"></span>
      <div class="settright">
        <div class="heji">
          合计: <span class="total"> ¥ {{ total }}</span>
        </div>
        <div class="settlementBtn">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
// import shoppingcarlistModel from "../moldel/shoppingcarlist";
// import goodsListModel from "../moldel/goodsListModel";
import { Toast } from "vant";
// import userModel from "../moldel/userModel";
import { mapState } from "vuex";
export default {
  data() {
    return {
      userWantBuylist: [],

      index: 1,

      discount: 0.88,

    //   checkOneLists: [],

      total: 0,
   
    };
  },
 
  created() {
     

    let usernames = localStorage.getItem("username");
    // console.log(usernames);
    if (usernames) {
       this.total=this.$route.params.total;
      this.userWantBuylist=this.$route.params.wantBuyList;
     
    } else {
      this.$router.history.push("login");
    }
   
  },
  computed: {
    ...mapState(["loginstatus"]),
  },
  methods: {
    
  
    changechecked() {},
    
   
    onClickLeft() {
        console.log(123);
        this.$router.history.go(-1)
    },

    showPopup() {
      this.show = true;
    },
    

    onSelect(action) {
      Toast(action.text);
    },
  },
  mounted() {},
};
</script>
<style  scoped>
.zd {
  text-align: left;
}

.delete-button {
  margin-left: -5px;
  height: 105px;
  line-height: 105px;
}
.total {
  color: #fe353c;
}
.settlement {
  /* background-color: #fb3f7f; */
  position: fixed;
  bottom: 50px;
  margin-left: 2.5%;
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.heji {
  font-size: 14px;
}
.settlementBtn {
  width: 120px;
  height: 40px;
  background-image: linear-gradient(to right, #fe353c, #fb3f7f);
  border-radius: 20px;
  line-height: 40px;
  margin-left: 15px;
  color: #fff;
}
.heji,
.settlementBtn {
  display: inline-block;
}
.checkAllLaber {
  font-size: 0;
}
.qx {
  font-size: 14px;
  margin-left: 8px;
}
.checkAll,
.qx {
  margin-top: 10px;
  display: inline-block;
  line-height: 20px;
  vertical-align: middle;
}
.name {
  font-size: 16px;
}
.countNum {
  margin-right: 10px;
}
.price {
  color: #fe353c;
  font-size: 16px;
}
.shoppingcarItemRight {
  flex: 1;
  text-align: left;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item_foot {
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;

  width: 100%;
}
.buynum {
  text-align: center;
  width: 58px;
}
.checkone {
  margin-top: 40px;
  margin-right: 8px;
}
.shoppingcarItem {
  margin-top: 15px;
  background-color: #fff;
  text-align: center;
  /* margin: 0 auto; */
  margin-left: 2.5%;
  width: 95%;
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.shoppingcarItemImg {
  width: 105px;
  height: 105px;
}
>>> .van-nav-bar__title {
  font-size: 16px;
  color: #fff;
}
>>> .van-nav-bar__text {
  color: #fff;
}
.head {
  background-image: linear-gradient(to right, #fe353c, #fb3f7f);
  margin-bottom: 7px;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  background-color: #fff;
  -webkit-appearance: none;
  border: 1px solid #c9c9c9;
  border-radius: 50%;
  outline: none;
  /* margin-left: 10px; */
}
.checkone:checked {
  background-color: #fe353c;
  /* background: url("../images/duigou.jpg") no-repeat center; */
}
.checkAll:checked {
  background-color: #fe353c;
  /* background: url("../images/duigou.jpg") no-repeat center; */
}
</style>