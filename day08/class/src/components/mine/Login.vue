<template>
    <div>
        用户名:<input v-model="username"/><br/>
        密码:<input v-model="userpwd"/><br/>
        <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
    data(){
        return  {
            username:"",
            userpwd:""
        }
    },
    methods:{
        login(){
            // alert(this.username);
            //此处省略   表单验证   axios请求验证
            localStorage.setItem("username",this.username);

            this.$router.history.push("/");


        }
    }
}
</script>