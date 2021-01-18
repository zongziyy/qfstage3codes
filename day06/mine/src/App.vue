<template>
    <div id="app">
        <router-view />
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/banner">电影</router-link> |
            <router-link to="/mine">Mine</router-link>
        </div>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    bottom: 0;
    display: flex;
    background-color: #fff;
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
