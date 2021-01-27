<template>
    <div class="shoppingmall">
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
    },
};
</script>


<style lang="scss" scoped>
@function px($n) {
    @return $n * (8/9);
}
.shoppingmall {
    background-color: #f5f5f9;
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
                    line-height: 1;
                    font-size: px(48px);
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
</style>
