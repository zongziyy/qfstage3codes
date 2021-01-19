<template>
    <div>
        <div class="nav">
            <router-link to="/list/nowplaying">正在热映</router-link>
            <router-link to="/list/comming">即将上映</router-link>
        </div>
       <router-view></router-view>
    </div>
</template>