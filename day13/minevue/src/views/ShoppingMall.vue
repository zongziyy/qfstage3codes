<template>
    <div class="shoppingmall">
        <div class="header">
            <h1 class="logo">
                <img
                    src="http://morzu.site:8080/img/service/heishalogo.png"
                    alt=""
                />
            </h1>
            <div class="secrchBtn" @click="toseach"></div>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in bannerImg" :key="index">
                <img :src="item.showimg" alt="" />
            </van-swipe-item>
        </van-swipe>
        <div class="goods">
            <div
                class="category"
                v-for="(item, index) in goodsList"
                :key="index"
            >
                <div class="title">
                    <p class="category-title">{{ item.posname }}</p>
                </div>
                <div class="goodsls">
                    <div
                        class="eachgoods"
                        v-for="(goods, index) in item.poslist"
                        :key="index"
                        :goodsId="goods.jumpurl.split('=')[1]"
                        @click="jumpToBuy(goods.jumpurl.split('=')[1])"
                    >
                        <img :src="goods.img" alt="" />
                        <div class="mall_bottom">
                            <h2 class="goodsName s1">
                                {{ goods.name }}
                            </h2>
                            <p class="goodsMsg s2">
                                {{ goods.slogan }}
                            </p>
                            <b class="goodsPrice">￥{{ goods.price }}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import goodsModel from "../model/shoppingMall";

export default {
    data() {
        return {
            holder: "黑鲨",
            bannerImg: [],
            goodsList: [],
        };
    },
    created() {
        goodsModel.bannerImg().then((res) => {
            this.bannerImg = res.data.data;
        });
        goodsModel.goodsList().then((res) => {
            this.goodsList = res.data.data;
        });
    },
    methods: {
        jumpToBuy(id) {
            this.$router.history.push({
                name: "detail",
                params: {
                    id: id,
                },
            });
        },

        toseach() {
            this.$router.history.push("/search");
        },
    },
};
</script>


<style lang="scss" scoped>
@function px($n) {
    @return $n * (8/9);
}
.my-swipe {
    .van-swipe__indicators {
        width: 100%;
        .van-swipe__indicator {
            width: px(30px);
        }
    }
    .van-swipe__indicator--active {
        background: rgb(0, 198, 94);
    }
    .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        width: 100%;
        text-align: center;
        img {
            width: 100%;
        }
    }
}
.shoppingmall {
    background-color: #f5f5f9;
    .header {
        width: 100%;
        background-color: #000;
        display: flex;
        padding: px(30px) 0;
        position: relative;
        .logo {
            height: px(90px);
            // height: 100%;
            box-sizing: content-box;
            text-align: center;
            flex: 1 1;
            img {
                height: 100%;
            }
        }
        .secrchBtn {
            position: absolute;
            height: px(90px);
            width: px(90px);
            border-radius: px(9000px);
            // overflow: hidden;
            top: 0;
            right: px(40px);
            bottom: 0;
            margin: auto;
            background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F25%2F26%2F59b09050c4528_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614494252&t=3b0db1710295c9ccb613a185328594c3")
                no-repeat center center;
            background-origin: border-box;
            background-size: 104% 104%;
            cursor: pointer;
        }
    }
    .goods {
        .category {
            .title {
                line-height: 1;
                box-sizing: border-box;
                font-size: px(48px);
                text-align: center;
                // height: px(48px) !important;
                padding-top: px(70.5px);
                padding-bottom: px(39px);
            }
            .category-title {
                position: relative;
                display: inline-block;
                font-weight: bolder;
                color: #000;
            }
            .category-title::before,
            .category-title::after {
                content: "";
                width: px(180px);
                height: 1px; /*no*/
                background: #333;
                position: absolute;
                top: px(27px);
            }
            .category-title::before {
                left: px(-210px);
            }
            .category-title::after {
                right: px(-210px);
            }
            .goodsls {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .eachgoods {
                    background-color: #fff;
                    width: 49%;
                    text-align: center;
                    margin-bottom: px(30px);
                    img {
                        width: px(360px);
                        height: px(360px);
                        margin: px(30px) 0;
                    }
                    .goodsName {
                        width: 90%;
                        font-size: px(48px);
                        height: px(52px);
                        line-height: px(52px);
                        margin: 0 auto;
                        color: #000;
                    }
                    .goodsMsg {
                        width: 90%;
                        overflow: hidden;
                        padding: px(22.5px) px(40px) 0;
                        margin: 0 auto;
                        color: #999;
                    }
                    .goodsPrice {
                        line-height: 1;
                        font-weight: bolder;
                        padding: px(45px) 0;
                        color: #00c65e;
                        font-size: px(48px);
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
