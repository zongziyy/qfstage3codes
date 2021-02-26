<template>
  <div id="app">
      <div>
          <el-button type="primary" @click="changeLang">
             {{this.$i18n.locale==="zh"?"English":"中文"}}
        </el-button>
      </div>
    <div class="content">
      <!-- <keep-alive>  可以缓存组件中的数据 -->
       <router-view/>  
      <!-- </keep-alive> -->
    </div>
  </div>
</template>
<script>
export default {
  methods:{
      changeLang(){
          let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
         this.$i18n.locale = lang;
      }
  }
}
</script>

<style>
#nav{
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  left:0;
  bottom:0;
  background-color: cornsilk;
  z-index: 9999;
}
#nav  a{
  flex:1;
  text-align: center;

}

</style>
