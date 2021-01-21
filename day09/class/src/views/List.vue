<template>
  <div class="list">
    <div class="list-item" v-for="item in goodsList" :key="item.id">
      <img :src="item.goodsimg" />
      <p>{{ item.goodsname }}</p>
      <p>
        {{ item.goodsnum }}
        <button @click="gotoshoppingcar(item)">加入购物车</button>
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import  {Dialog} from "vant";
import shoppingcarModel from "../model/shoppingCarModel";
export default {
  computed: {
    ...mapState(["goodsList"]),
  },
  created() {
    //第一次进这个页面 就就把数据存起来
    //第二次进这个页面  直接使用存起来的数据
    //本地存储
    // if (window.localStorage.getItem("goodslist")) {
    //     this.list =JSON.parse(window.localStorage.getItem("goodslist"));
    // } else {
    //   goodsModel.query().then((res) => {
    //     this.list = res.data;
    //     window.localStorage.setItem("goodslist", JSON.stringify(res.data));
    //   });
    // }
    //上面可以实现
    // if (!this.goodsList.length) {
    //   goodsModel.query().then((res) => {
    //     this.initGoodsList(res.data);
    //   });
    // }
    if (!this.goodsList.length) {
      this.asyncInitGoodsList();
    }
  },
  methods: {
    ...mapActions(["asyncInitGoodsList"]),
    showDialog() {
      Dialog.confirm({
        title: "加入成功",
        message: "是否马上进入购物车页面结算",
      })
        .then(() => {
          this.$router.history.push("/shoppingcar");
        })
        .catch(() => {
          // on cancel
        });
    },
    gotoshoppingcar(item) {
      let userid = window.localStorage.getItem("userid");
      if (userid) {
        let { id: goodsid, goodsname, goodsprice, goodsimg } = item;
        let info = {
          userid,
          goodsid,
          goodsname,
          goodsimg,
          goodsprice,
          buynum: 1,
        };

        //判断useid是否买了该商品
        shoppingcarModel
          .query({
            userid,
            goodsid,
          })
          .then((res) => {
            let list = res.data;
            if (list.length) {
              //更新

              let id = list[0].id; //存在的那条购物车数据的id
              let buynum = list[0].buynum * 1 + 1;

              shoppingcarModel.update(id, { buynum }).then(() => {
                //console.log(res.data);
                this.showDialog();
              });
            } else {
              shoppingcarModel.add(info).then(() => {
                //往数据库新增数据
                //console.log(res.data);
                this.showDialog();
              });
            }
          });
        // console.log(info);
      } else {
        this.$router.history.push("/mine");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.list-item {
  float: left;
  width: 150px;
  img {
    width: 150px;
  }
}
</style>