<template>
    <div class="index">
        <div class="imgs">
            <a v-for="(item, index) in picList" :key="index" href="javascript:;"
                ><img :src="item.img" alt=""
            /></a>
        </div>
        <div class="footer">
            <div class="service">
                <div class="service-imgs">
                    <img
                        src="http://morzu.site:8080/img/service/7tian.png"
                        alt=""
                    />
                    <p>7天无理由退货</p>
                </div>
                <div class="service-imgs">
                    <img
                        src="http://morzu.site:8080/img/service/15tian.png"
                        alt=""
                    />
                    <p>15天无理由换货</p>
                </div>
                <div class="service-imgs">
                    <img
                        src="http://morzu.site:8080/img/service/bao.png"
                        alt=""
                    />
                    <p>满99元包邮</p>
                </div>
            </div>
            <p class="phone">400-015-8899</p>
            <p class="service-time">热线服务时间: 09:00 - 24：00</p>
            <van-button class="sub" round block @click="exitMall"
                >逛逛商城</van-button
            >
        </div>
    </div>
</template>

<script>
import axios from "../model/axios";

export default {
    data() {
        return {
            picList: [],
        };
    },
    created() {
        axios({
            method: "get",
            url: "http://store.blackshark.com/index/propos?position=mo_idx_img",
        }).then((res) => {
            this.picList = res.data.data;
        });
    },
    methods: {
        exitMall() {
            this.$router.history.push("/mall");
        },
    },
};
</script>

<style lang="scss">
@function px($n) {
    @return $n * (8/9);
}
.index {
    width: 100%;
    background-color: #f5f5f9;
    .imgs {
        font-size: 0;
        background-color: #000;
    }
    img {
        width: 100%;
    }
    .footer {
        background-color: #fff;
        margin-top: 89px;
        padding-top: 82px;
        text-align: center;
        padding-bottom: px(90px);
        .service {
            display: flex;
            .service-imgs {
                width: 33%;
                p {
                    padding-top: px(36px);
                    font-size: 32px;
                    color: #999;
                }
                img {
                    width: 95px;
                }
            }
        }
        .phone {
            padding-top: px(172.5px);
            font-size: 75px;
            color: #000;
            // height: 75px;
            line-height: 75px;
        }
    }
    /deep/.sub {
        font-size: px(40px);
        border: none;
        height: px(130px);
        width: px(750px);
        background: #00c65e;
        color: #fff;
        border-radius: px(999px);
        height: px(120px);
        margin: 0 auto;
        margin-top: px(75px);
    }
}
</style>
