<template>
  <div class="about">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="flag"
    >
      <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    </van-list>
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
      list: [],
    };
  },
  created(){
    for(var i=0;i<15;i++){
      this.list.push(this.list.length+1);
    }
  },
  methods: {
    onLoad() {
         for(var i=0;i<15;i++){
              this.list.push(this.list.length+1);
         }
         this.loading=false;//表示后面 碰到了底部 还可以请求数据
         if(this.list.length>=60){
           this.finished=true;
         }
    },
  },
};
</script>
