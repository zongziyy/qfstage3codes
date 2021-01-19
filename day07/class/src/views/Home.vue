<template>
  <div class="home">
    <myswiper :list="list" ref="myswiper" class="myswiper"></myswiper>
    <div class="home-nav" :class="{ fixed: flag }">
      <div class="nav-title" v-show="flag">电影</div>
      <div class="nav-content">
        <div
          class="nav-item"
          v-for="item in menuList"
          :key="item.id"
          :class="{ selected: item.id == isSelected }"
          @click="changecom(item.id, item.com)"
        >
          {{ item.msg }}
        </div>
      </div>
    </div>
    <component :is="com"></component>
  </div>
</template>
<style scoped>
.home-nav {
  overflow: hidden;
}
.fixed {
  position: fixed;
  left: 0;
  top: 0;
  background-color: cornsilk;
  z-index: 1000;
  width: 100%;
}
.nav-title {
  text-align: center;
  height: 40px;
}
.nav-content {
  display: flex;
  height: 40px;
}
.nav-content .nav-item {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.nav-item.selected {
  color: #ff5f16;
}
</style>
<script>
//每个页面都要引入
import homeModel from "../model/homeModel";
import myswiper from "../components/MySwiper";
import nowPlaying from "../components/home/NowPlaying";
import comming from "../components/home/Comming";

export default {
  data() {
    return {
      //isfixed: false, //是否吸顶的判断
      flag: false,
      com: nowPlaying,
      list: [],
      isSelected: 1,
      menuList: [
        {
          id: 1,
          msg: "正在热映",
          com: nowPlaying,
        },
        {
          id: 2,
          msg: "即将上映",
          com: comming,
        },
      ],
    };
  },
  components: {
    myswiper,
    nowPlaying,
    comming,
  },
  methods: {
    changecom(id, com) {
      this.isSelected = id;
      this.com = com;
    },
  },
  created() {
    homeModel.bannerList().then((res) => {
      this.list = res.data;
    });
  },
  beforeDestroy(){
    console.log("home")
  },
  mounted() {
    // let  mySwiper = this.$refs.myswiper;
    // console.log(mySwiper._vnode.elm.offsetHeight);

    window.onscroll = () => {
      //滚动条事件

      let mySwiper = document.querySelector(".myswiper");
      let height = window.getComputedStyle(mySwiper)["height"];
      height = parseFloat(height);

      let scrollTop = document.documentElement.scrollTop; //滚动条的高度

      if (scrollTop >= height) {
        this.flag = true;
       /// this.isfixed = true;
      } else {
        this.flag = false;
        //this.isfixed = false;
      }
    };
  },
};
</script>




