<template>
    <div>
        404页面{{num}}
    </div>
</template>
<script>
import  bus  from  "../bus"
export default {
    data(){
        return  {num:0}
    },
    created(){
      //  bus.$emit("changeFlag",false);
        
    },
    beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
        bus.$emit("changeFlag",false);
           next(vm => {
            // 通过 `vm` 访问组件实例
                vm.num =100;
            })
      
  },
    beforeDestroy(){
       // bus.$emit("changeFlag",true);
    },

    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
       bus.$emit("changeFlag",true);
       next();
  }
}
</script>