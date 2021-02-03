<template>
  <div id="app">
    <div class="content">
      <!-- <keep-alive>  可以缓存组件中的数据 -->
       <router-view/>  
      <!-- </keep-alive> -->
    </div>
  </div>
</template>


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
