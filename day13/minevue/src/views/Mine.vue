<template>
    <div class="mine">
        <div class="header">
            <div class="banner">
                <div class="touxiang">
                    <img
                        src="https://bsaccount-1256119282.cos.ap-chengdu.myqcloud.com/Avatar.png"
                        alt=""
                    />
                </div>
                <p class="username">你好,{{ username }}</p>
            </div>
        </div>
        <div class="lists" v-for="(item, index) in list" :key="index">
            <div class="item" v-for="i in item.items" :key="i.id">
                <div class="icon"><img :src="i.icon" alt="" /></div>
                <p class="title">{{ i.title }}</p>
            </div>
        </div>
        <div style="margin: 20px; margin-top: 30px">
            <van-button class="sub" round block type="info" @click="exitLogin"
                >退出登录</van-button
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "zongzi",
            list: [
                {
                    name: "list1",
                    items: [
                        {
                            id: 1,
                            icon:
                                "http://morzu.site:8080/img/service/icon1.png",
                            title: "我的订单",
                        },
                        {
                            id: 2,
                            icon:
                                "http://morzu.site:8080/img/service/icon2.png",
                            title: "我的优购码",
                        },
                        {
                            id: 3,
                            icon:
                                "http://morzu.site:8080/img/service/icon3.png",
                            title: "我的优惠券",
                        },
                        {
                            id: 4,
                            icon:
                                "http://morzu.site:8080/img/service/icon4.png",
                            title: "我的评价",
                        },
                        {
                            id: 5,
                            icon:
                                "http://morzu.site:8080/img/service/icon5.png",
                            title: "我的预约",
                        },
                    ],
                },

                {
                    name: "list2",
                    items: [
                        {
                            id: 1,
                            icon:
                                "http://store.blackshark.com/m/static/dizhi.0c07e68d.png",
                            title: "收货地址",
                        },
                    ],
                },
                {
                    name: "list3",
                    items: [
                        {
                            id: 1,
                            icon:
                                "http://morzu.site:8080/img/service/icon6.png",
                            title: "售后服务",
                        },
                    ],
                },
                {
                    name: "list4",
                    items: [
                        {
                            id: 1,
                            icon:
                                "http://store.blackshark.com/m/static/my_6.0844177d.png",
                            title: "设置",
                        },
                    ],
                },
            ],
        };
    },
    created() {
        this.username = localStorage.getItem("username");
    },
    methods: {
        exitLogin() {
            localStorage.removeItem("username");
            this.$router.history.push("/");
        },
    },
};
</script>

<style lang="scss" scoped>
@function px($n) {
    @return $n * (8/9);
}

.mine {
    padding-bottom: px(180px);
    .header {
        width: 100%;
        background-color: #fff;
        height: px(450px);
        .banner {
            box-sizing: border-box;
            // height: px(180px);
            padding: px(135px) px(42px) 0 px(45px);
            margin-bottom: px(22.5px);
            display: flex;
            align-items: center;
            .touxiang {
                width: px(180px);
                height: px(180px);
                img {
                    width: 100%;
                }
            }
            .username {
                padding-left: px(45px);
                font-size: px(36px);
                font-weight: 600;
            }
        }
    }
    .lists {
        background: #fff;
        margin-top: px(22.5px);
        .item {
            height: px(143px);
            color: #333;
            &:not(:last-of-type) {
                border-bottom: 1px solid#dbdbe0; /*no*/
            }
            display: flex;
            .icon {
                width: px(144px);
                height: px(144px);
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: px(54px);
                }
            }
            .title {
                flex: 1;
                line-height: px(133px);
                text-align: left;
                font-size: px(42px);
                color: #333;
                padding-right: px(42px);
                background: url("http://morzu.site:8080/img/service/go.png")
                    right center no-repeat;
                background-size: px(27px) px(37.5px);
                background-origin: content-box;
            }
        }
    }
    /deep/.sub {
        background-color: #fc2f2f;
        font-size: px(45px);
        border: none;
        height: px(130px);
    }
}
</style>