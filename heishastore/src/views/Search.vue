<template>
    <div class="searchpage">
        <div class="header">
            <h1 class="logo">
                <div class="blank"></div>
                <img
                    src="http://morzu.site:8080/img/service/heishalogo.png"
                    alt=""
                />
            </h1>
            <div class="secrchBtn" @click="toseach"></div>
            <div class="search">
                <van-search
                    v-model="value"
                    show-action
                    shape="round"
                    :placeholder="holder"
                    background="#000"
                    class="searchInp"
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: search,
        };
    },
};
</script>


<style lang="scss" scoped>
@function px($n) {
    @return $n * (8/9);
}

.searchpage {
    background-color: #f5f5f9;
    height: px(150px);
    .header {
        background-color: #000;
        display: flex;
        h1 {
            flex: 1 1;
            // line-height: px(150px);
            padding-left: px(30px);
            .blank {
                width: 0;
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
            img {
                width: px(270px);
                // height: px(75px);
                vertical-align: middle;
            }
        }
        .search {
            width: 100%;
            /deep/.searchInp {
                width: 80%;
                // padding: px(50px) px(10px);
                height: px(150px);
                margin: 0 auto;
                .van-search__content--round {
                    background-color: #d4d4d480;
                }
                .van-cell {
                    color: #fff;
                    height: px(100px);
                    .van-field__left-icon {
                        line-height: px(95px);
                        padding: 0 px(10px);
                        text-align: center;
                        .van-icon-search {
                            font-size: px(50px);
                        }
                    }
                    .van-field__body {
                        height: 100% !important;
                        .van-field__control {
                            color: #fff;
                            height: 100% !important;
                        }
                    }
                }
            }
        }
    }
}
</style>
