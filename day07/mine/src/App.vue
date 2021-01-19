<template>
    <div id="app">
        <router-view id="main" />
        <div id="nav" v-show="flag">
            <router-link to="/banner">电影</router-link> |
            <router-link to="/">影院</router-link> |
            <router-link to="/about">资讯</router-link> |
            <router-link to="/mine">我的</router-link>
        </div>
    </div>
</template>
<script>
import bus from "./bus";

export default {
    data() {
        return {
            flag: true,
        };
    },
    created() {
        bus.$on("changeFlag", (flag) => {
            this.flag = flag;
        });
    },
};
</script>
<style>
html,
body {
    height: 100%;
    width: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
#main {
    flex: 1;
    overflow-y: scroll;
}
#nav {
    width: 100%;
    height: 40px;
    line-height: 40px;
    bottom: 0;
    display: flex;
    background-color: #fff;
    flex-shrink: 0;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
    width: 33%;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
