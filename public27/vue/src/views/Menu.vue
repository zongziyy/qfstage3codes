<template>
<div class="about" style="color:wheat">
  <el-container>
       <el-header>
         <h1>27极简</h1>
       </el-header>
  <el-container>
 <el-aside width="150px">
 <el-row class="tac" width="150px">
  <el-col :span="12">
    <el-menu 
      default-active="/menu/parta"
      class="el-menu-vertical-demo"
      style="width:150px"  :router="flag" >

      <el-menu-item index="/menu/parta" >
        <i class="el-icon-menu"></i>
        <span slot="title">甲方管理</span>
      </el-menu-item>
      <el-menu-item index="/menu/partb" >
        <i class="el-icon-document"></i>
        <span slot="title">乙方管理</span>
      </el-menu-item>
      <el-menu-item index="/menu/order">
        <i class="el-icon-setting"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>

</el-row>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      flag:true
    }
  },
  methods:{

   }
}
</script>
<style scoped>
.about{
  height: 100%;
  width: 100%;
}
.el-container{
    height: 100%;
  width: 100%;
}
  .el-header {
    background-color: #409EFF;
    color:wheat;

  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
      height: 100%;
  }
</style>
