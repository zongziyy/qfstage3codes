<template>
    <div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="loginusername"
                name="username"
                label=""
                placeholder="用户名"
                :rules="[
                    { required: true, message: '请填写用户名' },
                    {
                        pattern: /^[a-z][\w]{5,11}$/i,
                        message: '用户名格式错误',
                    },
                ]"
            />
            <van-field
                v-model="loginpassword"
                type="password"
                name="password"
                label=""
                autocomplete="off"
                placeholder="密码"
                :rules="[
                    { required: true, message: '请填写密码' },
                    { pattern: /^[\w]{5,11}$/i, message: '密码格式错误' },
                ]"
            />
            <div style="margin: 16px">
                <van-button
                    class="sub"
                    round
                    block
                    type="info"
                    native-type="submit"
                    >登陆</van-button
                >
            </div>
        </van-form>
    </div>
</template>

<script>
import { Toast } from "vant";
import userModel from "../model/userlogin";

export default {
    data() {
        return {
            loginusername: "",
            loginpassword: "",
        };
    },

    computed: {
        // ...mapState(["loginstatus", "user"]),
    },
    created() {},
    methods: {
        onSubmit(info) {
            // console.log(info);
            userModel
                .query({
                    username: info.username,
                    userpwd: info.password,
                })
                .then((res) => {
                    if (res.data != "") {
                        console.log(res.data);
                        Toast.success("密码正确,登陆中");
                        localStorage.setItem("username", res.data[0].username);
                        console.log(this.$router.history);
                        this.$router.history.go(-1);
                    } else {
                        Toast.fail("用户名密码不匹配");
                    }
                });
        },
    },
};
</script>
