<template>
  <div class="nowplaying">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="flag"
      >
        <div
          class="nowplaying-item"
          v-for="item in list"
          :key="item.filmId"
          @click="gotoDetail(item.filmId)"
        >
          <div class="item-left">
            <img :src="item.poster" />
          </div>
          <div class="item-middle">
            <p>
              {{ item.name
              }}<span style="background-color: #d2d6dc">{{
                item.filmType.name
              }}</span>
            </p>
            <p>
              <span v-show="item.grade"> 观众评分{{ item.grade }}</span>
            </p>
            <p class="actors">主演:{{ item.actors | filterActors }}</p>
            <p>{{ item.nation }}{{ item.runtime }}分钟</p>
          </div>
          <div class="item-right">
            <van-button plain hairline type="primary" @click.stop="buy(item.filmId)"
              >购票</van-button
            >
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import homeModel from "../../model/homeModel";
export default {
  data() {
    return {
      flag: false, //表示第一次进入不触发onload
      loading: false, //是否处于数据请求状态
      finished: false, //数据是否全部请求完成
      refreshing: false, //是否正在刷新
      list: [],
      pageNum: 1,
      total: 100,
    };
  },
  created() {
    homeModel
      .nowPlayingList({
        cityId: 310100,
        pageNum: 1,
        pageSize: 10,
        type: 1,
        k: 7814859,
      })
      .then((res) => {
        //获取了第一页的数据
        console.log(res.data.data.films); //这里得到了 数据
        this.list = res.data.data.films;
        this.total = res.data.data.total; //数据总数
      });
  },
  methods: {
    buy(id) {
        // window.location.href="http://localhost:8080/#/buy"
    //   console.log(  this.$router)
            // this.$router.history.push("/buy/"+id)
            //编程式导航
            this.$router.history.push({
                name:"buy",
                params:{id}//传参数
            })

    },
    gotoDetail(id) {
        // alert("详情编号"+id);
        this.$router.history.push({
            path:"/detail",
            query:{id,name:"leson"}
        })
    },
    onRefresh() {
      this.refreshing = false;
      this.pageNum = 1;
      //请求数据 请求第一页的数据
      homeModel
        .nowPlayingList({
          cityId: 310100,
          pageNum: 1,
          pageSize: 10,
          type: 1,
          k: 7814859,
        })
        .then((res) => {
          //获取了第一页的数据
          console.log(res.data.data.films); //这里得到了 数据
          this.list = res.data.data.films;
          this.total = res.data.data.total; //数据总数

          this.finished = false;
        });
    },
    onLoad() {
      // console.log("加载数据");  //获取第二页的数据
      this.pageNum++;

      homeModel
        .nowPlayingList({
          cityId: 310100,
          pageNum: this.pageNum,
          pageSize: 10,
          type: 1,
          k: 7814859,
        })
        .then((res) => {
          //获取了第一页的数据
          // console.log(res.data.data.films); //这里得到了 数据
          // this.list  = this.list.concat(res.data.data.films)
          this.list = [...this.list, ...res.data.data.films];
          this.loading = false; //为了可以持续加载

          if (this.list.length >= this.total) {
            this.finished = true;
          }
        });
    },
  },
  filters: {
    filterActors(list) {
      //list就是所有演员的集合
      if (list) {
        return list.map((item) => item.name).join(" "); //如果没有主演
      } else {
        return "暂无主演";
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nowplaying {
  width: 100%;
  overflow: hidden;
}
.nowplaying-item {
  display: flex;
}
.item-left {
  flex: 1;
}
.item-left img {
  width: 66px;
  height: 99px;
}

.item-middle {
  flex: 4;
  display: flex;
  flex-direction: column;
  height: 99px;
  overflow: hidden;
}
.item-middle p {
  flex: 1;
}
.item-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
p.actors {
  /* 强制不换行 */
  white-space: nowrap;
  /* 超出隐藏 */
  overflow: hidden;
  /* 超出省略 */
  text-overflow: ellipsis;
  flex-wrap: nowrap;
}
</style>