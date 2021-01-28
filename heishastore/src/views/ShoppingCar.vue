<template>
    <div class="shoppingcar">
        <div class="back">
            <p class="backBtn" @click="back"></p>
            <h1>我的购物车</h1>
            <p class="edit" v-if="isedit" @click="changeIsedit(isedit)">完成</p>
            <p class="edit" v-else @click="changeIsedit(isedit)">编辑</p>
        </div>
        <div class="items" v-for="item in shoppingList" :key="item.id">
            <div class="checkbox">
                <van-checkbox
                    v-model="item.ischecked"
                    checked-color="#00c65e"
                    icon-size="inherit"
                    class="checkone"
                    @click="changeChecked(item.id, item.ischecked)"
                ></van-checkbox>
            </div>
            <div class="img">
                <img :src="item.imgurl" alt="" />
            </div>
            <div class="gooddescripe">
                <h3 class="goodsname">{{ item.name }}</h3>
                <p class="version">{{ item.selectedVersion.join(",") }}</p>
                <div class="goodspriceNum">
                    <span class="goodsprice">{{ item.price }}</span>
                    <span v-if="!isedit">x{{ item.buyNum }}</span>
                    <div class="step___3OZb0" v-else>
                        <a @click="changeNum(item.id, item.buyNum, -1)">-</a
                        ><input
                            v-model="item.buyNum"
                            @blur="inpNum(item.id, item.buyNum)"
                        /><a @click="changeNum(item.id, item.buyNum, 1)">+</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="pay">
            <div class="checkall">
                <van-checkbox
                    v-model="checkedall"
                    checked-color="#00c65e"
                    icon-size="inherit"
                    class="checkone"
                    @click="checkall(checkedall)"
                    >全选</van-checkbox
                >
                <!-- <div class="checkallbox" @click="checkall(checked)"></div> -->
            </div>
            <div class="total">合计: ￥{{ total }}</div>
            <div class="jiesuan" v-if="!isedit" @click="jiesuan">
                结算({{ totalNum }})
            </div>
            <div class="del" v-else @click="delAll">删除</div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
import { Toast } from "vant";
import { Dialog } from "vant";

export default {
    data() {
        return {
            isedit: false,
            checkedall: false,
        };
    },
    computed: {
        ...mapState(["shoppingList"]),
        total() {
            let a = 0;
            this.shoppingList.forEach((item) => {
                if (item.ischecked) {
                    a += item.price * item.buyNum;
                }
            });
            return a;
        },
        checked() {
            if (
                this.shoppingList.every((item) => {
                    return item.ischecked;
                })
            ) {
                return true;
            } else {
                return false;
            }
        },
        totalNum() {
            let b = 0;
            this.shoppingList.forEach((item) => {
                if (item.ischecked) {
                    b += item.buyNum;
                }
            });
            return b;
        },
    },
    watch: {
        checked(flag) {
            this.checkedall = flag;
        },
    },
    created() {
        let username = localStorage.getItem("username");
        this.query({ username });
    },
    beforeDestroy() {
        this.shoppingList.forEach((item) => {
            this.patch({ id: item.id, data: { ischecked: false } });
        });
    },
    methods: {
        ...mapActions(["query", "patch", "del"]),
        back() {
            this.$router.history.go(-1);
        },
        changeChecked(id, flag) {
            this.patch({ id, data: { ischecked: flag } });
            // console.log(id, flag);
        },
        changeNum(id, num, n) {
            // console.log(id, num, n);
            if (n < 0 && num <= 1) {
                Toast.fail("数量不能小于1哦");
                return false;
            }
            this.patch({ id, data: { buyNum: num + n } });
        },
        inpNum() {},
        checkall(flag) {
            // console.log(flag);
            this.shoppingList.forEach((item) => {
                this.patch({ id: item.id, data: { ischecked: flag } });
            });
        },
        changeIsedit(flag) {
            this.isedit = !flag;
        },
        delAll() {
            // console.log(this.shoppingList.some((item) => item.ischecked));
            if (this.shoppingList.some((item) => item.ischecked)) {
                Dialog.confirm({
                    title: "删除",
                    message: "确认删除?",
                })
                    .then(() => {
                        console.log(1);
                        this.shoppingList.forEach((item) => {
                            if (item.ischecked) {
                                this.del(item.id);
                            }
                        });
                    })
                    .catch(() => {
                        // on cancel
                    });
            } else {
                Toast.fail("您还没有选中商品哦");
            }
        },
        jiesuan() {
            if (this.shoppingList.some((item) => item.ischecked)) {
                this.shoppingList.forEach((item) => {
                    if (item.ischecked) {
                        this.del(item.id);
                    }
                });
                const toast = Toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: "结算成功 3 秒后跳转首页",
                });

                let second = 3;
                const timer = setInterval(() => {
                    second--;
                    if (second) {
                        toast.message = `结算成功 ${second} 秒后跳转至首页`;
                    } else {
                        clearInterval(timer);
                        Toast.clear();
                        this.$router.history.push("/");
                    }
                }, 1000);
            } else {
                Toast.fail("您还没有选中商品哦");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@function px($n) {
    @return $n * (8/9);
}

.shoppingcar {
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
            font-size: px(36px);
        }
        .edit {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            right: px(30px);
            height: px(80px);
            width: px(150px);
            line-height: px(80px);
            font-size: px(40px);
        }
    }
    .items {
        font-size: px(36px);
        padding: px(37.5px) px(45px);
        background: #fff;
        margin-bottom: px(15px);
        display: flex;
        .checkbox {
            width: px(57px);
            margin-right: px(48px);
            line-height: 1.35rem;
            height: px(202.5px);
            font-size: px(50px);
            position: relative;
            .checkone {
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                right: 0;
            }
        }
        .img {
            width: px(202.5px);
            height: px(202.5px);
            flex-shrink: 0;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .gooddescripe {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
            padding-left: px(45px);
            height: px(202.5px);
            .goodsname {
                font-size: px(42px);
                line-height: 1;
                color: #000;
            }
            .version {
                font-size: px(36px);
                color: #666;
            }
            .goodspriceNum {
                display: flex;
                justify-content: space-between;
                .goodsprice {
                    color: #00c65e;
                }
                .step___3OZb0 {
                    display: inline-block;
                    line-height: px(60px);
                    height: px(60px);
                    border: 1px solid #999999; /*no*/
                    // margin-right: px(45px);
                    text-align: center;
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
        }
    }
    /deep/.pay {
        position: fixed;
        bottom: px(180px);
        left: 0;
        right: 0;
        height: px(130.5px);
        border-top: 1px solid #ccc; /*no*/
        background: #fff;
        display: -ms-flexbox;
        display: flex;
        line-height: px(130.5px);
        font-size: px(36px);
        .checkall {
            padding-left: px(45px);
            width: px(200px);
            margin-right: px(38px);
            height: 100%;
            font-size: px(50px);
            position: relative;
            position: relative;
            .checkone {
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                .van-checkbox__label {
                    font-size: px(36px);
                }
            }
            .checkallbox {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 999;
            }
        }
        .total {
            flex: 1 1;
            text-align: left;
            font-size: px(36px);
            color: #000;
            font-weight: 600;
        }
        .jiesuan,
        .del {
            background: #00c65e;
            color: #fff;
            width: px(360px);
        }
        .del {
            background: #fc0e2c;
        }
    }
}
</style>