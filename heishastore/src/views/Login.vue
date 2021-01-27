<template>
    <div class="login">
        <img
            class="logo"
            src="https://office-1256119282.file.myqcloud.com/account_v4/static/img/newlogo.svg"
            alt=""
        />
        <component :is="com"></component>
        <div class="toRegister">
            <van-button
                round
                block
                type="info"
                @click="changePage(hasaccounts)"
                :hasaccounts="true"
                >{{ msg }}</van-button
            >
        </div>
        <div class="agreement">
            登录即代表您已同意<a
                target="_blank"
                href="https://miui.blackshark.com/res/doc/eula_account.html?region=cn&amp;lang=zh_CN"
                >黑鲨服务协议</a
            >和<a
                target="_blank"
                href="https://miui.blackshark.com/res/doc/privacy_account.html?region=cn&amp;lang=zh_CN"
                >隐私条款</a
            >
        </div>
    </div>
</template>

<script>
import login from "../components/Login";
import register from "../components/Register";

export default {
    data() {
        return {
            hasaccounts: true,
            com: "login",
            msg: "还没有帐号?去注册!",
            pages: [
                {
                    hasaccounts: true,
                    com: "login",
                    msg: "还没有帐号?去注册!",
                },
                {
                    hasaccounts: true,
                    com: "register",
                    msg: "已有帐号?去登录",
                },
            ],
        };
    },
    components: {
        login,
        register,
    },
    created() {
        this.$store.commit("changeFlag", false);
    },
    beforeDestroy() {
        this.$store.commit("changeFlag", true);
    },
    methods: {
        changePage(flag) {
            console.log(1);
            if (flag) {
                this.hasaccounts = false;
                this.com = "register";
                this.msg = "还没有帐号?去注册!";
            } else {
                this.hasaccounts = true;
                this.com = "login";
                this.msg = "已有帐号?去登录";
            }
        },
    },
};
</script>


<style lang="scss" scoped>
@function px($n) {
    @return $n * (8/9);
}

.login {
    background-color: #000;
    .logo {
        user-select: none;
        visibility: visible;
        display: block;
        margin: 0 auto;
        width: px(206px);
        margin-top: px(143.5px);
    }
    /deep/.van-form {
        width: 100%;
        padding: 0 px(71.75px);
        margin-top: px(91.84px);
        box-sizing: border-box;
        .van-cell {
            background: #000;
            padding: 0;
        }
        .van-cell::after {
            display: none;
        }
        .van-cell__value {
            padding: 0;
            margin: px(20px) 0;
            // background: rgba(255, 255, 255, 0.12);
        }
        .active {
            border: 2px solid #00d766 !important; /*no*/
        }
        input {
            width: 100%;
            height: px(150px);
            background: rgba(255, 255, 255, 0.12);
            border: none;
            font-size: px(50px);
            outline: none;
            color: #f2f2f2;
            padding: 0 px(40px);
            box-sizing: border-box;
            border-radius: px(37.3px);
        }
        .van-field__error-message {
            height: px(80px);
            line-height: px(80px);
            font-size: px(38px);
            color: #ffffff;
        }
        .sub {
            background-color: #00d766;
            font-size: px(38px);
            border: none;
            height: px(145.4803px);
        }
    }
    .toRegister {
        width: 100%;
        padding: 0 px(115.75px);
        box-sizing: border-box;
        .van-button {
            font-size: px(38px);
            background-color: #333;
            border: none;
            width: 100%;
            height: px(145.4803px);
        }
    }
    .agreement {
        width: 100%;
        margin: px(63px) 0;
        text-align: center;
        font-size: px(37px);
        line-height: px(49px);
        color: rgba(255, 255, 255, 0.5);
        a {
            color: #00d766;
        }
    }
}
</style>