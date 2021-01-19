<template>
  <div><button @click="goback">返回</button>详情页面</div>
</template>
<script>
import filmModel from "../model/filmModel";
import bus from "../bus";
export default {
  created() {
    console.log("123");
    let filmId = this.$route.query.id; //得到了电影的编号
    filmModel.getInfoById({ filmId, k: 4619802 }).then((res) => {
      this.fileInfo = res.data.data.film;
      console.log(this.fileInfo);
    });
    bus.$emit("changeFlag", false);
    // 千万别写成了 this.$emit 它是自定义事件
  },
  beforeDestroy() {
    console.log("abc");
    bus.$emit("changeFlag", true);
  },
  methods: {
    goback() {
      // window.history.back();
      this.$router.history.go(-1);
    },
  },
};
</script>