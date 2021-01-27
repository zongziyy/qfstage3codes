<template>
    <div class="shoppingcar">
        <div class="back">
            <p class="backBtn" @click="back"></p>
            <h1>我的购物车</h1>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        back() {
            this.$router.history.go(-1);
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
    }
}
</style>