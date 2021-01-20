<template>
  <div>
    <div v-if="flag">
      <Info @changeflag ="changeFlag"></Info>
    </div>
    <div v-else>
      <div class="nav">
        <div class="nav-item" @click="changeCom('Login')">登录</div>
        <div class="nav-item" @click="changeCom('Register')">注册</div>
      </div>
      <component :is="com"></component>
    </div>
  </div>
</template>
<style scoped>
    .nav{
        width: 100%;
        display: flex;
        height: 40px;
    }
    .nav .nav-item{
        flex: 1;
        text-align: center;
    }
</style>
<script>
import Login from "../components/mine/Login";
import Register from "../components/mine/Register";
import Info from "../components/mine/Info";
export default {
  data() {
    return { flag: false, com: Login };
  },
  created(){
      this.flag = window.localStorage.getItem("username")?true:false;
  },
  methods:{
      changeCom(com){
          this.com = com;
      },
      changeFlag(flag){
          this.flag = flag;
      }
  },

  components: {
    Login,
    Register,
    Info,
  },
};
</script>