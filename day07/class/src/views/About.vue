<template>
  <div class="about">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="flag"
    >
    <!-- immediate-check 为false  表示页面加载的第一次 不触发load事件 -->

      <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    </van-list>
    </van-pull-refresh>
  </div>
</template>
<style scoped>
  .about{
    height: 100px;
    overflow-y: scroll;
  }
</style>
<script>
export default {
  data() {
    return {
      flag:false,
      loading: false,
      finished: false,
      refreshing:false,
      list: [],
    };
  },
  created(){
    for(var i=0;i<15;i++){
      this.list.push(this.list.length+1);
    }
  },
  methods: {
    onLoad() {//上拉  加载数据
         for(var i=0;i<15;i++){
              this.list.push(this.list.length+1);
         }
         this.loading=false;//表示后面 碰到了底部 还可以请求数据  不然只能请求一次
         if(this.list.length>=60){
           this.finished=true;
          //  this.finished=true;  表示数据全部请求完成  load事件 失效
         }
    },
    onRefresh(){//下拉刷新数据  最新的第一条数据
       // console.log("abc");
        this.refreshing = false;//上面的正在加载会一直存在

        this.list.length = 0;//快速清空 集合

        //显示实时的 第一页的数据
         for(var i=0;i<15;i++){
              this.list.push(this.list.length+1);
         }
         this.finished = false; //激活上拉加载

    }
  },
};
</script>
