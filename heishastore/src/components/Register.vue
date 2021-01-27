<template>
    <div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="regusername"
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
                v-model="regpassword"
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
            <van-field
                v-model="repassword"
                type="password"
                name="repassword"
                label=""
                autocomplete="off"
                placeholder="确认密码"
                :rules="[{ required: true, message: '请再次填写密码' }]"
            />
            <div style="margin: 16px">
                <van-button
                    class="sub"
                    round
                    block
                    type="info"
                    native-type="submit"
                    >注册</van-button
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
            regusername: "",
            regpassword: "",
            repassword: "",
        };
    },

    computed: {
        // ...mapState(["loginstatus", "user"]),
    },

    methods: {
        onSubmit(info) {
            // console.log(info);
            if (this.regpassword == this.repassword) {
                userModel
                    .query({
                        username: info.username,
                    })
                    .then((res) => {
                        if (res.data.length != 0) {
                            Toast.fail("该账号已经被注册,请更换用户名");
                        } else {
                            userModel
                                .add({
                                    username: info.username,
                                    userpwd: info.password,
                                })
                                .then((res) => {
                                    if (res.data) {
                                        Toast.fail("注册成功");
                                        this.$router.history.go(-1);
                                        localStorage.setItem(
                                            "username",
                                            info.username
                                        );
                                    } else {
                                        Toast.fail("注册失败.请联系管理人员");
                                    }
                                });
                        }
                    });
            } else {
                Toast.fail("两次密码不一致!");
            }
        },
    },
};
</script>