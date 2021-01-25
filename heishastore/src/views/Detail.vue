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
            <div class="goodsName">腾讯黑鲨游戏手机3</div>
            <p class="goodsMsg">
                骁龙865、65W极速闪充、购机得心悦成长值及游戏福利（SA网络后续通过系统OTA升级实现支持）
            </p>
            <div class="miaosu">
                <span class="miaosu-green">腾讯黑鲨游戏手机3 直降500元</span>
                <span class="miaosu-black"
                    >年货节狂欢大放送 黑鲨3直降500元，速速来抢，手慢无</span
                >
            </div>
            <div class="goodsPrice">
                <del>￥3999元</del>
                <span>￥3499元</span>
            </div>
        </div>
    </div>
</template>
<script>
import detailModel from "../model/detail";

export default {
    data() {
        return { bannerImgList: [] };
    },
    created() {
        let id = this.$route.params.id;
        detailModel.lbImg(id).then((res) => {
            this.bannerImgList = res.data.data;
        });
    },
};
</script>
<style lang="scss" scoped>
// $fontColor: #00c65e;

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
        .miaosu-green {
            color: #00c65e;
        }
    }
}
</style>