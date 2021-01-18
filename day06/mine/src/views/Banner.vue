<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList" :key="item.id">
                <img :src="item.img" alt="" />
            </van-swipe-item>
        </van-swipe>
        <div class="change">
            <div
                class="hot-playing"
                v-for="item in list"
                :key="item.id"
                @click="changePage(item)"
            >
                <span :class="{ selected: flag == item.id }">{{
                    item.title
                }}</span>
            </div>
        </div>
        <component :is="com"></component>
    </div>
</template>

<style>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    height: 150px;
}

.my-swipe .van-swipe-item img {
    width: 375px;
    height: 150px;
}
.change {
    width: 100%;
    display: flex;
}
.change .hot-playing {
    width: 50%;
    height: 50px;
    font-size: 14px;
}
.change .hot-playing span {
    display: inline-block;
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid #fff;
}
.change .hot-playing .selected {
    color: #ff5f16;
    border-color: #ff5f16;
}
</style>
<script>
import banner from "../model/banner";
import hotplaying from "../components/movies/HotPlaying";
import comingsoon from "../components/movies/ComingSoon";

export default {
    data() {
        return {
            bannerList: [],
            flag: 1,
            com: hotplaying,
            list: [
                {
                    id: 1,
                    title: "正在热映",
                    com: hotplaying,
                },
                {
                    id: 2,
                    title: "即将上映",
                    com: comingsoon,
                },
            ],
        };
    },
    components: {
        hotplaying,
        comingsoon,
    },

    created() {
        banner.bannerList().then((res) => {
            // console.log(res.data);
            this.bannerList = res.data;
        });
    },
    methods: {
        changePage(item) {
            this.flag = item.id;
            this.com = item.com;
        },
    },
};
</script>