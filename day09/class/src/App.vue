<template>
  <div id="app">
    <div id="nav" >
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/mine">个人</router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/page1">页面1</router-link>
      <router-link to="/page2">页面2</router-link>
      <!-- a标签 -->
    </div>
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
