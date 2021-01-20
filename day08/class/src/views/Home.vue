<template>
  <div class="home">
    首页
    <div v-for="(item,index)  in  list" :key="index" @click="gotoDetail(item)">
      {{item}}
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {list:[1,2,3,4,5]}
  },
  // mounted(){
  //   document.title="首页"
  // },
  methods:{
    gotoDetail(id){
        // this.$router.history.replace("/detail"); 没有返回
        // this.$router.history.push("/detail");

        // this.$router.history.push({
        //   name:"detail"
        // })

        // this.$router.history.push({
        //   path:"/detail"
        // })

        //  this.$router.history.push({
        //   name:"detail",
        //   params:{id:id}
        // })

        this.$router.history.push({
          path:"/detail",
          query:{id}
        })


    }
  }
}
</script>



