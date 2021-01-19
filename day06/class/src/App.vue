<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/mine">个人</router-link>
      <router-link to="/list">列表</router-link>
      <!-- a标签 -->
    </div>
    <div class="content">
       <router-view/>  
    </div>
 
    <!-- <component :is=""></component> -->
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
