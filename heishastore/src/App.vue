<template>
    <div id="app">
        <router-view class="com" />
        <div id="nav">
            <router-link to="/">
                <i class="iconfont icon-shouye"></i>
                <p>首页</p>
            </router-link>
            <router-link to="/mall">
                <i class="iconfont icon-shangcheng"></i>
                <p>商城</p>
            </router-link>
            <router-link to="/shoppingcar">
                <i class="iconfont icon-gouwuche"></i>
                <p>购物车</p>
            </router-link>
            <router-link to="/mine">
                <i class="iconfont icon-pengyou"></i>

                <p>个人中心</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import "./css/m-reset.css";
export default {};
</script>
<style lang="scss">
$fontColor: #00c65e;
@function px($n) {
    @return $n * (8/9);
}
html,
body {
    width: 100%;
    height: 100%;
}
body {
    font-size: 24px;
    background-color: #f5f5f9;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .com {
        flex: 1;
        overflow-y: scroll;
    }
    #nav {
        padding: px(30px);
        display: flex;
        a {
            flex: 1;
            display: block;
            color: #2c3e50;
            font-weight: normal;
            font-family: "MicroSoft YaHei";
            &.router-link-exact-active {
                color: $fontColor;
            }
            .iconfont {
                font-size: px(60px);
                display: inline-block;
                height: px(60px);
                width: px(60px);
            }
        }
    }
}
</style>
