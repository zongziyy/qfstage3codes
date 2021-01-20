<template>
  <div id="app">
    <div id="nav" v-show="flag">
        <span v-for="item  in  menuList" :class="{selected:item.id==selectedId}" :key="item.id" @click="changeName(item)">{{item.msg}}</span>
      <!-- a标签 -->
    </div>
    <router-view/>
      <div>
        <router-view  name="a"></router-view>
        </div>
        <div class="box2">
        <router-view  name="b"></router-view>
        </div>
    <!-- <component :is=""></component> -->
  </div>
</template>
<script>
import  bus from  "./bus";
export default {
  data(){
    return {
      selectedId:1,
      menuList:[{id:1,msg:"首页",name:"Home"},{id:2,msg:"关于",name:"About"},{id:3,msg:"个人",name:"mine"},{id:4,msg:"页面一",name:"page1"},{id:5,msg:"页面二",name:"page2"},{id:6,msg:"新增",name:"page3"},{id:7,msg:"列表",name:"page4"}]
    }
  },
  computed:{
    flag(){
      return  this.$store.state.flag;
    }
  },
  created(){
    bus.$on("changeFlag",(flag)=>{
      this.flag = flag;
    })
  },
  methods:{
    changeName(item){
      this.selectedId = item.id;

        this.$router.push({
          name:item.name
        })
    }
  }

}
</script>

<style>
.selected{
  color:red
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  left: 0;
  bottom:0;
  display: flex;
  width: 100%;
}

#nav span {
  flex:1;
  text-align: center;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
