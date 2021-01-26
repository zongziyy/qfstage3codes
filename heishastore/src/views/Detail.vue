<template>
    <div class="detail">
        <div class="back">
            <p class="backBtn"></p>
            <h1>商品详情</h1>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in bannerImgList" :key="index">
                <img :src="item.url" alt="" />
            </van-swipe-item>
        </van-swipe>
        <div class="goodsDetail">
            <div class="goodsName">{{ goodsDetail.name }}</div>
            <p class="goodsMsg">
                {{ goodsDetail.slogan }}
            </p>
            <div class="miaosu" v-if="isCutPrice">
                <span class="miaosu-green" v-if="isGift">{{
                    isGift.acname
                }}</span>
                <span class="miaosu-black" v-if="isCutPrice">
                    {{ isCutPrice.slogan }}</span
                >
            </div>
            <div class="goodsPrice">
                <del v-if="isCutPrice">￥{{ goodsPrice }}</del>
                <span v-if="isCutPrice">
                    ￥{{ goodsPrice * 1 - cutPrice * 1 }}</span
                >
                <span v-else> ￥{{ goodsPrice }}</span>
            </div>
            <div class="onsale" v-show="isOnSale">
                <div
                    class="gift"
                    v-for="(item, index) in goodsOnSale"
                    :key="index"
                >
                    <span>{{ item.typeStr }}</span>
                    <p>
                        {{ item.rules | filterRules }}
                    </p>
                </div>
                <!-- <div class="sale" v-show="goodsOnSale.length > 1">
                    <span>减价</span>
                    <p>直降200元</p>
                </div> -->
            </div>
            <div class="tradeIn">
                <p>以旧换新</p>
            </div>
        </div>
        <!-- <div class="select">
            <van-sku
                v-model="show"
                :sku="sku"
                :goods="goods"
                :goods-id="goodsId"
                :quota="quota"
                :quota-used="quotaUsed"
                :hide-stock="sku.hide_stock"
                :message-config="messageConfig"
                @buy-clicked="onBuyClicked"
                @add-cart="onAddCartClicked"
            />
        </div> -->
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show">内容</van-popup> -->
        <div class="select">
            <span class="xuanze">选择:</span
            ><span class="selected"
                >蓝色
                <img src="../assets/go.png" alt="" />
            </span>
        </div>
        <div class="select">
            <span class="xuanze">商品评价</span
            ><span class="selected">(656)</span>
            <img src="../assets/go.png" alt="" />
            <span class="more">查看更多</span>
        </div>
        <div class="contexts">
            <div class="users">
                <img
                    src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIIDUnsfAibxPRRexpQv5zpCeU4s2L8MUEvT8Zsy7vMwh77A383hso17m8IcibkQabRyibYvIo4ZA9IQ/132"
                    alt=""
                />
                <span class="username">你的身边有我</span>
            </div>
            <p>？？？？</p>
        </div>
        <van-tabs v-model="active" scrollspy sticky>
            <van-tab
                v-for="item in detailList"
                :title="item.title"
                :key="item.id"
            >
                {{ item }}
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import detailModel from "../model/detail";
// document.location = document.location;
let that;
export default {
    data() {
        return {
            detailList: [
                {
                    id: 1,
                    title: "产品详情",
                },
                {
                    id: 2,
                    title: "规格参数",
                },
                {
                    id: 3,
                    title: "购买须知",
                },
            ],
            active: 0,
            container: null,
            bannerImgList: [],
            goodsDetail: {},
            goodsOnSale: [],
            tradeIn: [],
            saleRules: [],
            goodsPrice: 0,
            isOnSale: true,
            cutPrice: 0,
            isGift: null,
            gitfs: [],
            isCutPrice: null,
            show: false,
            selectedIndex: 1,
        };
    },
    beforeCreate() {
        that = this;
    },
    mounted() {
        this.container = this.$refs.container;
    },
    created() {
        this.$store.commit("changeFlag", false);
        let id = this.$route.params.id;
        detailModel.goodsOnSale(id).then((res) => {
            this.goodsOnSale = res.data.data;
            this.isCutPrice = false;
            this.isGift = null;
            if (res.data.data) {
                this.isOnSale = true;
                res.data.data.forEach((item) => {
                    if (item.type == 1) {
                        this.isCutPrice = item;
                        console.log(this.isCutPrice);
                        this.cutPrice = JSON.parse(item.rules).cutPrice;
                    }
                    if (item.type == 6) {
                        this.isGift = item;
                        this.gitfs = item.rules;
                    }
                });
            } else {
                this.isOnSale = false;
            }
            this.tradeIn = res.data.informdata;
        });
        detailModel.lbImg(id).then((res) => {
            this.bannerImgList = res.data.data;
        });
        detailModel.goodsDetail(id).then((res) => {
            this.goodsDetail = res.data.data;
            res.data.data.skus.forEach((item) => {
                if (item.skusn == id) {
                    this.goodsPrice = item.shopprice * 1;
                }
            });
        });
        detailModel
            .goodsDecripes({ skusn: id, paramkey: "pro/detailinfo" })
            .then((res) => {
                console.log(res.data.data);
            });
    },
    beforeDestroy() {
        this.$store.commit("changeFlag", true);
    },
    methods: {
        changePage(id) {
            this.selectedIndex = id;
        },
    },
    filters: {
        filterRules: (list) => {
            // console.log(that);
            list = JSON.parse(list);
            if (Array.isArray(list)) {
                // console.log(list);
                return list
                    .map((item) => item.name + " x " + item.count)
                    .join("、");
            } else {
                // console.log(this);
                return that.saleRules.description;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
@function px($n) {
    @return $n * (8/9);
}

.detail {
    .back {
        height: px(127px);
        line-height: px(127px);
        position: relative;
        background-color: #fff;
        .backBtn {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            left: px(30px);
            width: px(80px);
            height: px(80px);
            background: url(../assets/back.png) center center no-repeat;
            background-size: px(51px);
        }
        h1 {
            font-size: px(36px);
        }
    }
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

.goodsDetail {
    background-color: #fff;
    padding: px(55.5px) px(55.5px) px(36px);
    text-align: left;
    .goodsName {
        font-size: px(48px);
        color: #000;
        font-weight: bold;
    }
    .goodsMsg {
        line-height: 1.5;
        color: #7f7f7f;
        font-size: px(45px);
    }
    .miaosu {
        font-size: px(42px);
        padding-top: px(22.5px);
        color: #7f7f7f;
        .miaosu-green {
            color: #00c65e;
        }
    }
    .goodsPrice {
        font-size: px(51px);
        padding-top: px(22.5px);
        line-height: 1;
        span {
            color: #00c65e;
        }
    }
    .onsale {
        margin-top: px(52px);
        background-color: #f7f7f7;
        .gift {
            padding: px(36px) px(45px) 0;
            display: flex;
            align-items: flex-start;
            &:last-of-type {
                padding: px(36px) px(45px) px(45px);
            }
            span {
                display: block;
                // width: px(60px);
                height: px(52px);
                line-height: px(52px);
                margin-right: px(27px);
                background: #000;
                padding: 0 px(15px);
                color: #fff;
                border-radius: 3px; /*no*/
                text-align: center;
                font-size: px(30px);
                flex-shrink: 0;
            }
            p {
                font-size: px(36px);
                color: #000;
                line-height: 1.5;
                width: 80%;
                // flex: 1;
            }
        }
    }
    .tradeIn {
        p {
            font-size: px(42px);
            margin-top: px(30px);
            line-height: 1;
            color: #00c65e;
        }
    }
}
.select {
    line-height: px(40.5px);
    margin-top: px(22.5px);
    padding: px(48px) px(55.5px);
    text-align: left;
    background-color: #fff;
    color: #000;
    font-size: px(36px);
    .more {
        float: right;
    }
    img {
        width: px(28.5px);
        height: px(36px);
        float: right;
    }
}
.contexts {
    line-height: 1;
    font-size: px(36px);
    // margin-top: -0.02rem;
    padding-left: px(45px);
    padding-bottom: px(45px);
    background: #fff;
    text-align: left;
    .users {
        padding-top: px(45px);
        border-top: 1px solid #999; /*no*/
        line-height: px(78px);
        font-size: px(42px);
        img {
            width: px(78px);
            height: px(78px);
            margin-right: px(30px);
        }
    }
    p {
        padding-top: px(27px);
        line-height: 1.4;
        padding-right: px(45px);
        color: #999;
        font-size: px(36px);
    }
}
/deep/.van-sticky {
    margin-top: px(22.5px);
    background: #fff;
    // height: px(120px);
    padding: px(30px) 0;
    border-bottom: 1px solid #d7d7d7; /*no*/
    font-size: px(36px);
    line-height: px(60px);
    .van-tabs__wrap {
        .van-tabs__nav--line {
            display: flex;
            .van-tab {
                width: 33%;
                font-size: px(36px);
                span {
                    display: inline-block;
                }
            }
        }
    }
}
</style>