<template>
    <div class="detail">
        <div class="back">
            <p class="backBtn" @click="back"></p>
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
            </div>
            <div class="tradeIn">
                <p>以旧换新</p>
            </div>
        </div>

        <div class="select" @click="showb">
            <span class="xuanze">选择: </span
            ><span v-show="selectedVersion != ''">
                {{ selectedVersion.join(" + ") }} x
                {{ toshoppingcar.buyNum }}
            </span>
            <img src="http://morzu.site:8080/img/service/go.png" alt="" />
        </div>
        <van-popup
            v-model="showbottom"
            closeable
            close-icon="close"
            position="bottom"
            :style="{}"
        >
            <div class="top___1103h">
                <div class="tu___m9Uz0">
                    <img
                        src="https://shop-1256119282.file.myqcloud.com/blackshark/20200403/20200403162002_574.png"
                    />
                </div>
                <div class="xx___3GLAX">
                    <h4>￥{{ goodsPrice * 1 - cutPrice * 1 }}</h4>
                    <p>{{ goodsDetail.name }}</p>
                </div>
            </div>
            <div
                class="list___ohIFn"
                v-for="(item, ind) in goodsDetail.attributes"
                :key="item.anid"
            >
                <h4>{{ item.attrname }}</h4>
                <p>
                    <span
                        :class="{
                            selected: selectspan[ind] == index,
                        }"
                        v-for="(attr, index) in item.attrvals"
                        :key="attr.avid"
                        @click="selectThis(ind, index)"
                        >{{ attr.avval }}</span
                    >
                </p>
            </div>
            <div class="list_1___3AgfM">
                <h4>购买数量</h4>
                <div class="step___3OZb0">
                    <a @click="changeNum(buyNum, -1)">-</a
                    ><input v-model="buyNum" @blur="inpNum(buyNum)" /><a
                        @click="changeNum(buyNum, 1)"
                        >+</a
                    >
                </div>
            </div>
            <div class="bottom___20FEb" @click="determine">确定</div>
        </van-popup>
        <div class="select" @click="learnMore">
            <span class="xuanze">商品评价</span
            ><span>({{ commentList.length }})</span>
            <img src="http://morzu.site:8080/img/service/go.png" alt="" />
            <span class="more">查看更多</span>
        </div>

        <div class="contexts">
            <div class="users">
                <img :src="avatar" alt="" />
                <span class="username">{{ nickname }}</span>
            </div>
            <p>{{ content }}</p>
        </div>

        <van-tabs v-model="active" scrollspy sticky>
            <van-tab
                v-for="item in detailList"
                :title="item.title"
                :key="item.id"
                v-html="item.paramval"
            >
                {{}}
            </van-tab>
        </van-tabs>
        <div class="blank"></div>
        <div class="foot">
            <div class="buy">
                <div class="menuItem___3M3MV" @click="goindex">
                    <img src="http://morzu.site:8080/img/service/shouye.png" />
                    <p>首页</p>
                </div>
                <div class="menuItem___3M3MV" @click="goshoppingcar">
                    <img
                        src="http://morzu.site:8080/img/service/shoppingcar.png"
                    />
                    <p>购物车</p>
                </div>
                <div class="menuItem___3M3MV">
                    <img src="http://morzu.site:8080/img/service/kefu.png" />
                    <p>客服</p>
                </div>
            </div>
            <div class="buy">
                <a class="addtocar" @click="addToShoppingCar">加入购物车</a
                ><a class="buyNow">立即购买</a>
            </div>
        </div>
    </div>
</template>
<script>
import detailModel from "../model/detail";
import shoppingCarModel from "../model/shoppingCar";
import { Toast } from "vant";

// document.location = document.location;
let that;
export default {
    data() {
        return {
            indexlocal: 0,
            detailList: [
                {
                    id: 1,
                    title: "产品详情",
                    paramval: `<div class="title">
                                    <p class="category-title">商品详情</p>
                                </div><div class='detailImgs'>`,
                },
                {
                    id: 2,
                    title: "规格参数",
                    paramval: `<div class="title">
                                    <p class="category-title">产品参数</p>
                                </div><div class='paramsdetail'>`,
                },
                {
                    id: 3,
                    title: "购买须知",
                    paramval: `<div class="title">
                                    <p class="category-title">购买须知</p>
                                </div><div class='mustKnow'>`,
                },
            ],
            toshoppingcar: {},
            selectedVersion: [],
            selectspan: [0, 0, 0],
            buyNum: 1,
            showbottom: false,
            active: 0,
            container: null,
            bannerImgList: [],
            goodsDetail: {},
            goodsOnSale: [],
            tradeIn: [],
            goodsPrice: 0,
            isOnSale: true,
            cutPrice: 0,
            isGift: null,
            gitfs: [],
            isCutPrice: null,
            show: false,
            selectedIndex: 1,
            commentList: [],
            avatar: "",
            nickname: "",
            content: "",
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
            this.isCutPrice = null;
            this.isGift = null;
            if (res.data.data) {
                this.isOnSale = true;
                res.data.data.forEach((item) => {
                    if (item.type == 1) {
                        this.isCutPrice = item;
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
            .goodsDecripes({ skusn: id, paramkey: "infoContent" })
            .then((res) => {
                this.detailList[0].paramval +=
                    res.data.data.paramval + `</div>`;
            });
        detailModel
            .goodsDecripes({ skusn: id, paramkey: "paramContent" })
            .then((res) => {
                this.detailList[1].paramval +=
                    res.data.data.paramval + `</div>`;
            });
        detailModel
            .goodsDecripes({ skusn: id, paramkey: "noteContent" })
            .then((res) => {
                this.detailList[2].paramval +=
                    res.data.data.paramval + `</div>`;
            });
        detailModel
            .commentList({ pid: this.goodsDetail.pid, skusn: id })
            .then((res) => {
                this.commentList = res.data.data;
                // console.log(this.commentList);
                this.avatar = this.commentList[0].avatar;
                this.nickname = this.commentList[0].nickname;
                this.content = this.commentList[0].content;
                // console.log(this.avatar, this.nickname, this.content);
            });
    },
    beforeDestroy() {
        this.$store.commit("changeFlag", true);
    },
    methods: {
        learnMore() {
            let skusn = this.$route.params.id;
            let pid = this.goodsDetail.pid;
            this.$router.history.push({
                name: "contents",
                params: {
                    pid,
                    skusn,
                },
            });
        },
        changePage(id) {
            this.selectedIndex = id;
        },
        back() {
            this.$router.history.go(-1);
        },
        showb() {
            this.showbottom = true;
        },
        determine() {
            // let id = this.$route.params.id;
            this.showbottom = false;
            this.selectedVersion = [];
            this.toshoppingcar = {};
            this.goodsDetail.attributes.forEach((item, index) => {
                this.selectedVersion.push(
                    item.attrvals[this.selectspan[index]].avval
                );
            });
            this.toshoppingcar.selectedVersion = this.selectedVersion;
            this.toshoppingcar.name = this.goodsDetail.name;
            this.toshoppingcar.buyNum = this.buyNum;
            this.toshoppingcar.price = this.goodsPrice * 1 - this.cutPrice * 1;
            this.toshoppingcar.imgurl = this.goodsDetail.imgurl;
            this.toshoppingcar.ischecked = false;
            // this.toshoppingcar.skusn = id;
            this.buyNum = 1;
            // console.log(this.toshoppingcar);
        },
        selectThis(ind, index) {
            this.selectspan.splice(ind, 1, index);
        },
        changeNum(num, n) {
            if (n < 0 && num <= 1) {
                Toast.fail("数量不能小于1哦");
                return false;
            }
            this.buyNum += n;
        },
        inpNum(num) {
            if (isNaN(num)) {
                Toast.fail("请输入数字");
                this.buyNum = 1;
            } else {
                if (num < 1) {
                    Toast.fail("数量不能小于1哦");
                    this.buyNum = 1;
                }
            }
        },
        addToShoppingCar() {
            // localStorage.removeItem("username");
            let username = localStorage.getItem("username");
            // console.log(username);
            if (username) {
                this.toshoppingcar.username = username;
                // let id = this.$route.params.id;
                // console.log(username);
                shoppingCarModel.query({ username: username }).then((res) => {
                    let nowVersion = this.toshoppingcar.selectedVersion;
                    if (res.data.length != 0) {
                        if (nowVersion) {
                            let id = 0;
                            let nowNum = 0;
                            // let nowVersion = this.toshoppingcar.selectedVersion;
                            // console.log(res.data);
                            res.data.forEach((item) => {
                                let flag = nowVersion.every(
                                    (nowitem, index) => {
                                        return (
                                            nowitem ==
                                            item.selectedVersion[index]
                                        );
                                    }
                                );
                                // console.log(flag);
                                if (flag) {
                                    id = item.id;
                                    nowNum =
                                        item.buyNum + this.toshoppingcar.buyNum;
                                }
                            });
                            if (nowNum) {
                                // console.log(id, nowNum);
                                shoppingCarModel
                                    .addNum(id, {
                                        buyNum: nowNum,
                                    })
                                    .then(() => {
                                        Toast.success(
                                            "添加成功，宝贝已经在购物车等你啦"
                                        );
                                    });
                            } else {
                                shoppingCarModel
                                    .add({
                                        ...this.toshoppingcar,
                                    })
                                    .then(() => {
                                        Toast.success(
                                            "添加成功，宝贝已经在购物车等你啦"
                                        );
                                    });
                            }
                        } else {
                            Toast.fail("请先选择购买版本");
                        }
                    } else {
                        if (nowVersion) {
                            shoppingCarModel
                                .add({ ...this.toshoppingcar })
                                .then(() => {
                                    Toast.success(
                                        "添加成功，宝贝已经在购物车等你啦"
                                    );
                                });
                        } else {
                            Toast.fail("请先选择购买版本");
                        }
                    }
                });
            } else {
                const toast = Toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: "3 秒后跳转登陆",
                });

                let second = 3;
                const timer = setInterval(() => {
                    second--;
                    if (second) {
                        toast.message = `${second} 秒后跳转至登陆`;
                    } else {
                        clearInterval(timer);
                        Toast.clear();
                        this.$router.history.push("/login");
                    }
                }, 1000);
            }
        },
        goshoppingcar() {
            this.$router.history.push("/shoppingcar");
        },
        goindex() {
            this.$router.history.push({
                name: "index",
            });
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
                return that.isCutPrice.description;
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
        border-bottom: 1px solid #999; /*no*/
        .backBtn {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            left: px(30px);
            width: px(80px);
            height: px(80px);
            background: url("http://morzu.site:8080/img/service/back.png")
                center center no-repeat;
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
    padding: 0 px(45px) px(45px);
    background: #fff;
    text-align: left;
    margin-bottom: px(22.5px);
    .users {
        padding-top: px(45px);
        border-top: 1px solid #999; /*no*/
        line-height: px(78px);
        font-size: px(42px);
        .username {
            font-size: px(36px);
        }
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
/deep/.van-tabs {
    // width: 100%;
    .van-sticky {
        background: #fff;
        // height: px(120px);
        padding: px(30px) 0;
        border-bottom: 1px solid #d7d7d7; /*no*/
        font-size: px(36px);
        line-height: px(60px);
        .van-tabs__wrap {
            height: px(70px);
            .van-tabs__nav--line {
                display: flex;
                height: px(70px);
                padding-bottom: px(10px);
                .van-tab {
                    width: 33%;
                    font-size: px(36px);
                    height: px(60px);
                    line-height: px(60px);
                    span {
                        display: inline-block;
                        line-height: 1;
                    }
                }
                .van-tab--active {
                    color: #00c65e;
                }
                .van-tabs__line {
                    background-color: #00c65e;
                    bottom: px(15px);
                }
            }
        }
    }
    .van-tabs__content {
        width: 100%;
        .van-tab__pane {
            width: 100%;
            .title {
                line-height: 1;
                box-sizing: border-box;
                font-size: px(48px);
                text-align: center;
                // height: px(48px) !important;
                padding-top: px(70.5px);
                padding-bottom: px(39px);
                background-color: #f5f5f9;
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
            > div {
                background-color: #fff;
                width: 100%;
                padding-bottom: px(60px);
                p {
                    img {
                        width: 100%;
                    }
                }
            }
            .paramsdetail {
                background: #fff;
                line-height: 1.4;
                font-size: px(36px);
                padding: px(45px);
                text-align: left;
            }
            .mustKnow {
                background: #fff;
                line-height: 1.4;
                font-size: px(36px);
                padding: px(45px);
                text-align: left;
            }
        }
    }
}
.foot {
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: #fff;
    width: 100%;
    height: px(150px);
    z-index: 9;
    .buy {
        flex: 1;
        display: flex;
        .menuItem___3M3MV {
            // width: 33.33%;
            flex: 0.3333 1;
            img {
                width: px(60px);
                height: px(60px);
                margin-top: px(22.5px);
            }
            p {
                font-size: px(33px);
                color: #00000080;
                margin: px(4.5px) 0;
            }
        }
        .addtocar,
        .buyNow {
            flex: 1 1;
            height: px(150px);
            line-height: px(150px);
            color: #fff;
            background-color: #000000;
            font-size: px(42px);
        }
        .buyNow {
            background-color: #00c65e;
        }
    }
}
.blank {
    width: 100%;
    height: px(150px);
}
/deep/.van-popup {
    .van-icon-close {
        font-size: px(60px);
    }
    .van-icon-close::before {
        width: px(60px);
        height: px(60px);
    }
    .top___1103h {
        line-height: 1;
        font-size: px(36px);
        padding: px(45px);
        border-bottom: 1px solid #cccccc80; /*no*/
        display: flex;
        .tu___m9Uz0 {
            width: px(277.5px);
            height: px(277.5px);
            margin-right: px(39px);
            background: #999;
            border-radius: px(12px);
            img {
                width: 100%;
            }
        }
        .xx___3GLAX {
            h4 {
                line-height: 1;
                padding-top: px(80px);
                font-size: px(60px);
                text-align: left;
                font-weight: 600;
                color: #00c65e;
            }
            p {
                box-sizing: border-box;
                padding-top: px(30px);
                font-size: px(42px);
            }
        }
    }
    .list___ohIFn {
        box-sizing: border-box;
        font-size: px(36px);
        margin-left: px(45px);
        border-bottom: 1px solid #cccccc80; /*no*/
        padding-top: px(51px);
        padding-bottom: px(42px);
        h4 {
            line-height: 1;
            color: #999;
            font-weight: normal;
            text-align: left;
        }
        p {
            line-height: 1;
            box-sizing: border-box;
            font-size: px(36px);
            padding-top: px(33px);
            text-align: left;
            span {
                height: px(48px);
                line-height: px(48px);
                padding: 0 px(22.5px);
                border-radius: 9999px;
                display: inline-block;
                margin-right: px(22.5px);
                margin-bottom: px(22.5px);
                color: #696969;
                border: 1px solid #696969; /*no*/
            }
            .selected {
                border: 1px solid #00c65e; /*no*/
                color: #00c65e;
            }
        }
    }
    .list_1___3AgfM {
        font-size: px(36px);
        margin-left: px(45px);
        padding-top: px(51px);
        padding-bottom: px(42px);
        display: flex;
        line-height: px(60px);
        h4 {
            line-height: px(60px);
            flex: 1 1;
            font-size: px(42px);
            color: #999;
            font-weight: 400;
            text-align: left;
        }
        .step___3OZb0 {
            display: inline-block;
            line-height: px(60px);
            height: px(60px);
            border: 1px solid #999999; /*no*/
            margin-right: px(45px);
            a {
                height: px(60px);
                width: px(60px);
                line-height: px(60px);
                box-sizing: border-box;
                color: inherit;
                background: transparent;
                display: inline-block;
            }
            input {
                border-left: 1px solid #999; /*no*/
                border-right: 1px solid #999; /*no*/
                width: px(60px);
                text-align: center;
            }
        }
    }
    .bottom___20FEb {
        font-size: px(42px);
        height: px(135px);
        line-height: px(135px);
        color: #fff;
        background: #00c65e;
    }
}
</style>