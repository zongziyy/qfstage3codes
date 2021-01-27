<template>
  <div class="shoppingcar">
    <van-nav-bar
      title="我的购物车"
      right-text="管理"
      @click-right="onClickRight"
      class="head"
    />
    <div
      class="shoppingcarItems"
      v-for="(item, index) in usershoppingcarlist"
      :key="index"
      @click="selectCheckOne(index)"
    >
      <van-swipe-cell>
        <!-- <van-cell :border="false" title="单元格" value="内容" /> -->
        <div class="shoppingcarItem">
          <div class="shoppingcarItemLeft">
            <input type="checkbox" class="checkone" />
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
              <p class="price">¥{{ item.userShopItem.price }}</p>
              <div class="countNum">
                <button @click="changeBuyNum(-1, index)">-</button>
                <input
                  class="buynum"
                  type="number"
                  v-model="item.element.buynum"
                />
                <button @click="changeBuyNum(1, index)">+</button>
              </div>
            </div>
          </div>
        </div>

        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="delOne(item.element, index)"
          />
        </template>
      </van-swipe-cell>
    </div>

    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
      class="zd"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>

    <div class="settlement">
      <label for="checkAll" class="checkAllLaber">
        <input
          type="checkbox"
          name=""
          id="checkAll"
          class="checkAll"
          @click="selectAll"
        />
        <span class="qx">全选</span>
      </label>
      <div class="settright">
        <div class="heji">
          合计: <span class="total"> ¥ {{ total }}</span>
        </div>
        <div class="settlementBtn">结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import shoppingcarlistModel from "../moldel/shoppingcarlist";
import goodsListModel from "../moldel/goodsListModel";
import { Toast } from "vant";
import userModel from "../moldel/userModel";
import couponsModel from "../moldel/couponsModel";
import { mapState } from "vuex";
export default {
  data() {
    return {
      usershoppingcarlist: [],

      index: 1,

      discount: 0.88,

      checkOneLists: [],

      total: 0,
      //优惠券
      chosenCoupon: -1,
      coupons: [],
      disabledCoupons: [],
      showPopover: false,
      showList: false,
      show: false,
    };
  },
  watch: {
    total(newTotal) {
      this.total = newTotal;
    },
    usershoppingcarlist: {
      deep: true,
      handler(nueList) {
        this.usershoppingcarlist = nueList;
      },
    },
    checkOneLists: {
      deep: true,
      handler(nueList) {
        let totalz = 0;

        Array.from(nueList).forEach((item, index) => {
          if (item) {
            totalz +=
              this.usershoppingcarlist[index].userShopItem.price *
              this.usershoppingcarlist[index].element.buynum;
          }
        });
        this.total = totalz;
      },
    },
  },
  created() {
    let usernames = localStorage.getItem("username");
    if (usernames) {
      this.init(usernames);
    } else {
      this.$router.history.push("login");
    }
    if (localStorage.getItem("username")) {
      userModel
        .query({
          username: localStorage.getItem("username"),
        })
        .then((res) => {
          for (let i = 0; i < res.data[0].couponcodes.length; i++) {
            couponsModel
              .query({
                couponcode: res.data[0].couponcodes[i],
              })
              .then((res) => {
                if (res.data[0].endAt < new Date().getTime() / 1000) {
                  this.disabledCoupons.push(res.data[0]);
                } else {
                  this.coupons.push(res.data[0]);
                }
              });
          }
        });
    }
  },
  computed: {
    ...mapState(["loginstatus"]),
  },
  methods: {
    init(usernames) {
      this.usershoppingcarlist = [];
      this.total = 0;
      shoppingcarlistModel
        .query({
          username: usernames,
          status: 1,
        })
        .then((res) => {
          let shoppingcarlist = res.data;
          shoppingcarlist.forEach((element) => {
            goodsListModel
              .query({
                id: element.goodsid,
              })
              .then((res) => {
                let userShopItem = res.data[0];
                this.usershoppingcarlist.push({
                  element,
                  userShopItem,
                });
              });
          });
        });
    },
    changeBuyNum(num, index) {
      this.usershoppingcarlist[index].element.buynum += num;
    },
    changechecked() {},
    delOne(item, index) {
      shoppingcarlistModel
        .update(item.id, {
          status: 2,
        })
        .then(() => {
          this.checkOneLists.splice(index, 1);
          this.usershoppingcarlist.splice(index, 1);

          Toast.success("删除成功");
        })
        .catch(() => {
          Toast.fail("删除失败");
        });
    },
    selectCheckOne(index) {
      let checkOneList = document.getElementsByClassName("checkone");
      let checkALL = document.getElementsByClassName("checkAll")[0];
      checkOneList.forEach(() => {
        this.checkOneLists.push(false);
      });
      this.checkOneLists[index] = checkOneList[index].checked;

      if (
        Array.from(checkOneList).every((item) => item.checked) &&
        checkOneList.length >= 1
      ) {
        checkALL.checked = true;
      } else {
        checkALL.checked = false;
      }
    },
    selectAll() {
      let checkOneList = document.getElementsByClassName("checkone");
      let checkALL = document.getElementsByClassName("checkAll")[0];
      checkOneList.forEach(() => {
        this.checkOneLists.push(false);
      });
      Array.from(checkOneList).map((item, index) => {
        this.checkOneLists[index] = checkALL.checked;

        return (item.checked = checkALL.checked);
      });
    },
    onClickRight() {},

    showPopup() {
      this.show = true;
    },
    onChange(index) {
      if (localStorage.getItem("username") && this.loginstatus) {
        if (this.checkOneLists.some((item) => item)) {
          this.showList = false;
          this.chosenCoupon = index;
          let discount = this.coupons[index].value / 100 || 0;
          this.total = this.total - discount * 1;
        } else {
          Toast.fail("您还没选购商品哦!");
        }
      } else {
        Toast.fail("您还没有登录,请先登录");
      }
    },
    ifexist(whichcoupons, res) {
      let inputcoupon = res.data[0];
      let inputcouponcode = res.data[0].couponcode;

      userModel
        .query({
          username: localStorage.getItem("username"),
        })
        .then((ress) => {
          if (ress.data[0] != "") {
            let havacoupons = ress.data[0].couponcodes;

            if (havacoupons.indexOf(inputcouponcode) != -1) {
              Toast.fail("您已经获取了该优惠码哦!");
            } else {
              havacoupons.push(inputcouponcode);
              userModel
                .update(ress.data[0].id, {
                  couponcodes: havacoupons,
                })
                .then(() => {
                  Toast.success("兑换成功");
                  this[whichcoupons].push(inputcoupon);
                });
            }
          }
        });
    },
    onExchange(code) {
      if (localStorage.getItem("username") && this.loginstatus) {
        couponsModel
          .query({
            couponcode: code,
          })
          .then((res) => {
            if (res.data != "") {
              if (res.data[0].endAt < new Date().getTime() / 1000) {
                this.ifexist("disabledCoupons", res);
              } else {
                this.ifexist("coupons", res);
              }
            } else {
              Toast.fail("未检测到该优惠码,请您确认后再次输入");
            }
          })
          .catch(() => {
            Toast.fail("未检测到该优惠码,请您确认后再次输入");
          });
      } else {
        Toast.fail("您还没有登录,请先登录");
      }
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
  width: 28px;
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