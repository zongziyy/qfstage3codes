<template>
  <div class="detail">
    <div class="detail_head">
      <img :src="goods.src" alt="" />
    </div>
    <div class="price">
      <p class="sellNow">¥ {{ goods.price * discount }}</p>
      <p>价格 ¥ {{ goods.price }}</p>
    </div>
    <div class="detail_name">
      <div class="name">
        <p>
          店铺地址: <i class="iconfont icon-weibiaoti-"></i>
          {{ goods.sellAddress }}
        </p>
        <h2>
          商品名: {{ goods.name }}
          <span class="sellCount">已售:{{ goods.sellCount }}</span>
        </h2>
      </div>
      <div class="goodslabel name">
        <p>
          <span>{{ goods.name }}</span>
          <span>{{ goods.name }}</span>
          <span>{{ goods.name }}</span>
          <span>{{ goods.name }}</span>
        </p>
      </div>
    </div>
    <div class="detail_addr">
      <div class="youfei">
        <p>
          邮费 <span><i class="iconfont icon-weibiaoti-"></i>发货:</span
          ><span>{{ goods.sellAddress }}</span> | <span>同城免运费</span>
          <span class="dianzan"
            ><i class="iconfont icon-dianzan"></i>{{ goods.sellCount }}</span
          >
        </p>
      </div>
      <!-- 优惠券单元格 -->
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
      <van-cell is-link @click="showPopup"
        ><span class="choosesize">选择</span>请选择 尺寸 颜色分类</van-cell
      >

      <van-popup
        v-model="show"
        round
        position="bottom"
        :style="{ height: '50%' }"
      >
        <div class="choosesize_head">
          <img :src="goods.src" alt="" /><span class="choosesize_head_price"
            >¥{{ goods.price }}</span
          >

          <p>请选择商品规格</p>
          <p>
            <span
              class="choosesizeItem"
              :class="{ chooseselect: index == 1 }"
              @click="chooseselect(1)"
              >餐桌</span
            >
            <span
              class="choosesizeItem"
              :class="{ chooseselect: index == 2 }"
              @click="chooseselect(2)"
              >配套餐椅</span
            >
          </p>
          <div>
            <span class="choosenum_left">请选择数量</span>
            <div class="choosenum">
              <button @click="changeNum(-1)" v-show="buynum > 1">-</button>
              <input type="number" v-model="buynum" min="1" />
              <button @click="changeNum(1)">+</button>
            </div>
            <div class="wancheng" @click="chooseok">完成</div>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="foot">
      <div class="joinshoppingcar" @click="joinshoppingcar(goods)">
        加入购物车
      </div>
      <div class="buynow">立即购买</div>
    </div>

    <list></list>
  </div>
</template>
<script>
import { Toast } from "vant";
import Vue from "vue";
import { CouponCell, CouponList } from "vant";
import { mapState } from "vuex";
import userModel from "../moldel/userModel";
import couponsModel from "../moldel/couponsModel";
import list from "../components/home/list";
import shoppingcarlistModel from "../moldel/shoppingcarlist";
Vue.use(CouponCell);
Vue.use(CouponList);

// 兑换码

export default {
  data() {
    return {
      buynum: 1,
      index: 1,
      chosenCoupon: -1,
      coupons: [],
      disabledCoupons: [],
      showPopover: false,
      showList: false,
      goods: {
        id: 1,
        src:
          "https://www.ikea.cn/cn/zh/images/products/grimsbu-ge-li-mu-si-bu-chuang-jia-bai-se__0749252_PE747238_S5.JPG?f=xxu%2039w",
        type: 1,
        name: "床一",
        price: 2000,
        sellAddress: "武汉",
        sellCount: 48,
      },
      discount: 0.88,
      show: false,
    };
  },
  components: {
    list,
  },
  computed: {
    ...mapState(["loginstatus", "user"]),
  },
  mounted() {
    this.goods = this.$route.params.item;
  },
  created() {
    if (localStorage.getItem("username") && this.loginstatus) {
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
  methods: {
    joinshoppingcar(goods) {
      let id = goods.id;
      let username = localStorage.getItem("username");

      if (username != "" && username) {
        shoppingcarlistModel.query().then((res) => {
          let shoppingcarlist = res.data;
    
          var hasgoods = shoppingcarlist.filter((item) => item.goodsid == goods.id);
      
          console.log(hasgoods[0]);
          if (hasgoods.length!=0) {
    
            shoppingcarlistModel.update(hasgoods[0].id, {
              buynum: hasgoods[0].buynum + 1,
            }).then(() => {
                Toast.success("添加购物车成功");
              })
              .catch(() => {
                Toast.fail("添加失败");
              });
          } else {
            shoppingcarlistModel
              .add({
                username,
                goodsid: id,
                buynum: 1,
              })
              .then(() => {
                Toast.success("新增购物车成功");
              })
              .catch(() => {
                Toast.fail("新增失败");
              });
          }
          
        });
      } else {
        this.$router.history.push("login");
      }
    },
    changeNum(num) {
      if (this.buynum >= 1) {
        this.buynum = this.buynum + num;
      } else {
        this.buynum = 1;
      }
    },
    chooseselect(num) {
      this.index = num;
    },
    chooseok() {
      this.show = false;
    },
    showPopup() {
      this.show = true;
    },
    onChange(index) {
      if (localStorage.getItem("username") && this.loginstatus) {
        this.showList = false;
        this.chosenCoupon = index;
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
              //   console.log(havacoupons,inputcouponcode);
              havacoupons.push(inputcouponcode);
              userModel
                .update(ress.data[0].id, {
                  couponcodes: havacoupons,
                })
                .then(() => {
                  Toast.success("兑换成功");
                  console.log(whichcoupons);
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
      // console.log(code);
    },

    onSelect(action) {
      Toast(action.text);
    },
  },
};
</script>
<style scoped>
.joinshoppingcar {
  background-color: #fabf24;
  margin-left: 20px;
  margin-right: 15px;
}
.buynow {
  background-color: #fe353c;
}
.foot div {
  margin-top: 30px;
  text-align: center;
  color: #fff;
  width: 105px;
  height: 38px;
  line-height: 38px;
  font-size: 18px;
  border-radius: 20px;
  float: right;
}
.wancheng {
  margin: auto;
  text-align: center;
  width: 75%;
  height: 45px;
  background-image: linear-gradient(to right, #fe353c, #fb3f7f);
  border-radius: 30px;
  margin-top: 20px;
  color: #f5f5f7;
  font-size: 20px;
  line-height: 45px;
}
.choosenum_left {
  color: black;
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
}
.choosenum input {
  text-align: center;
  width: 20px;
}
.choosenum {
  float: right;
}
.chooseselect {
  border: solid 1px #fb3f7f;
  color: #fb3f7f;
}
.choosesizeItem {
  margin: 15px;
  text-align: center;
  line-height: 15px;
  margin-right: 10px;
  display: inline-block;
  height: 25px;
  padding: 5px 10px;

  background-color: #f5f5f7;
  margin-left: 10px;
}
.choosesize_head p:nth-of-type(1) {
  margin-left: 10px;
  height: 35px;
  line-height: 35px;
  font-size: 15px;
  font-weight: 500;
  color: black;
}
.choosesize_head_price {
  color: #fb3f7f;
  margin-left: 15px;
  font-size: 17px;
  line-height: 100px;
}
.choosesize_head img {
  margin-top: 30px;
  width: 120px;
  height: 100px;
  margin-left: 10px;
}
>>> .choosesize_head {
  margin-right: 15px;
  color: #9e9e9e;
  text-align: left;
}
.choosesize {
  color: #9e9e9e;
  margin-right: 10px;
}
.zd {
  text-align: left;
}

.youhui {
  color: orange;
  padding-left: 35px;
}
.tit {
  text-align: left;
}
.dianzan {
  float: right;
  padding-right: 10px;
}
.detail_addr {
  background-color: #fff;
  margin-bottom: 10px;
}
.youfei span {
  margin-right: 5px;
}
.youfei {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: left;
  padding-left: 10px;
}
.detail_name {
  background-color: #fff;
  margin-bottom: 10px;
}
.goodslabel p {
  font-size: 14px;
  color: rgb(137, 160, 179);
}
.goodslabel p span {
  margin: 0 5px;
}
.sellCount {
  margin-right: 10px;
  float: right;
  color: #fe353c;
}
.name {
  padding-left: 10px;
  text-align: left;
}
.name p {
  font-size: 16px;
  height: 46px;
  line-height: 46px;
}
.sellNow {
  font-size: 25px;
  padding: 10px 0;
}
.price {
  height: 85px;
  background-image: linear-gradient(to right, #fb3f7f, #fe353c);
  font-size: 16px;
  text-align: left;
  color: #fff;
  padding-left: 10px;
}
.detail_head img {
  width: 100%;
}
</style>