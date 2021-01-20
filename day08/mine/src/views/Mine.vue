<template>
    <div class="mine">
        <div class="userInfo" v-if="isLogin">
            <Info @changeflag="changeFlag"></Info>
        </div>
        <div v-else>
            <div class="login" @click="changeCom('Login')">登录</div>
            <div class="register" @click="changeCom('Register')">注册</div>
            <component :is="com"></component>
        </div>
    </div>
</template>
<script>
import Info from "./Info";
import Login from "./Login";
import Register from "./Register";

export default {
    data() {
        return {
            isLogin: false,
            com: Login,
        };
    },
    created() {
        this.isLogin = localStorage.getItem("username") ? true : false;
    },
    methods: {
        changeCom(com) {
            this.com = com;
        },
        changeFlag(flag) {
            this.isLogin = flag;
        },
    },
    components: {
        Info,
        Login,
        Register,
    },
};
</script>
<style scoped>
</style>