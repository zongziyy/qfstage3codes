<template>
    <div>
        个人信息<button @click="exist">退出登录</button>
    </div>
</template>
<script>
export default {
    methods:{
        exist(){
            window.localStorage.removeItem("username");
            //this.$router.history.go(0);
            this.$emit("changeflag",false);
        }
    }
}
</script>