<template>
    <div class="contents">
        <div class="back">
            <p class="backBtn" @click="back"></p>
            <h1>商品评价</h1>
        </div>
        <div
            class="list___2KMHG"
            v-for="(item, index) in commentList"
            :key="index"
        >
            <div class="tou___2y3Wr">
                <img :src="item.avatar" />
                <div class="name___EIR6j">
                    <h1>{{ item.nickname }}</h1>
                    <p>规格：{{ item.attrs }}</p>
                </div>
                <div class="time___2QepT">{{ item.createdateStr }}</div>
            </div>
            <div class="miaoshu___1gF6s">
                <span>{{ item.content }}</span>
            </div>
            <div class="tupian___3C5Pq" v-show="item.urls">
                <img :src="item.urls" />
            </div>
            <div v-if="item.appends != ''">
                <div
                    class="zhuiping___2RbgE"
                    v-for="list in item.appends"
                    :key="list"
                >
                    <p v-if="list.uid == '0'">
                        【官方商城回复】：{{ list.acontent }}
                    </p>
                    <p v-else>追评：{{ list.acontent }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import detailModel from "../model/detail";
export default {
    data() {
        return {
            commentList: [],
        };
    },
    methods: {
        back() {
            this.$router.history.go(-1);
        },
    },
    created() {
        this.$store.commit("changeFlag", false);
        let pid = this.$route.params.pid;
        let skusn = this.$route.params.skusn;
        detailModel.commentList({ pid, skusn }).then((res) => {
            this.commentList = res.data.data;
            // console.log(this.commentList);
        });
    },
    beforeDestroy() {
        this.$store.commit("changeFlag", true);
    },
};
</script>

<style lang="scss" scoped>
@function px($n) {
    @return $n * (8/9);
}

.contents {
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
            background: url(../assets/back.png) center center no-repeat;
            background-size: px(51px);
        }
        h1 {
            font-size: px(50px);
            color: #000;
            font-weight: 600;
        }
    }
    .list___2KMHG {
        background: #fff;
        padding: px(55.5px);
        margin-bottom: px(22.5px);
        .tou___2y3Wr {
            height: px(123px);
            line-height: px(123px);
            display: flex;
            font-size: px(42px);
            font-weight: 600;
            img {
                height: px(123px);
                width: px(123px);
                margin-right: px(30px);
            }
            .name___EIR6j {
                flex: 1 1;
                line-height: 1;
                h1 {
                    font-size: px(48px);
                    font-weight: 400;
                    text-align: left;
                }
                p {
                    padding-top: px(22.5px);
                    font-size: px(42px);
                    color: #999;
                    font-weight: 400;
                }
            }
            .time___2QepT {
                font-size: px(36px);
                color: #999;
                font-weight: 400;
            }
        }
        .miaoshu___1gF6s {
            line-height: 1.5;
            padding-top: px(34.5px);
            text-align: justify;
            color: #999;
        }
        .tupian___3C5Pq {
            text-align: left;
            img {
                box-sizing: content-box;
                width: px(225px);
                height: px(225px);
                margin-right: px(37.5px);
                padding-top: px(45px);
            }
        }
        .zhuiping___2RbgE {
            line-height: 1.5;
            text-align: justify;
            p {
                padding-top: px(60px);
                color: #999;
            }
        }
    }
}
</style>