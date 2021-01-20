<template>
    <div class="login">
        <p>用户名<input type="text" v-model="username" /></p>
        <p>密码<input type="pwd" /></p>
        <p><input type="button" value="登录" @click="login" /></p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: "",
        };
    },
    methods: {
        login() {
            localStorage.setItem("username", this.username);
            this.$router.push("/");
        },
    },
};
</script>