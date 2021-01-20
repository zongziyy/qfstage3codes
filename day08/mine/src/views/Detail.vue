<template>
    <div>
        <div class="header" :class="{ showHeader: headerflag }">
            <div class="goBack" @click="goBack">
                <img src="../assets/back.png" alt="" />
            </div>
            送你一朵小红花
        </div>
        <div class="banner">
            <img src="" alt="" />
        </div>
    </div>
</template>

<script>
import movieModel from "../model/detail";
import bus from "../bus";

export default {
    data() {
        return {
            headerflag: false,
            movieDetail: {},
        };
    },
    methods: {
        goBack() {
            this.$router.history.go(-1);
        },
    },
    created() {
        let filmId = this.$route.params.id;
        movieModel.moviesDetail({ filmId, k: 4188352 }).then((res) => {
            this.movieDetail = res.data.data.film;
        });
        bus.$emit("changeFlag", false);
    },
    beforeDestroy() {
        bus.$emit("changeFlag", true);
    },
};
</script>

<style scoped>
.header {
    text-align: center;
    font-size: 17px;
    line-height: 44px;
    position: fixed;
    background-color: hsla(0, 0%, 100%, 0);
    color: transparent;
    transition: all 0.3s ease;
    width: 100vw;
    height: 44px;
    z-index: 1;
}
.showHeader {
    background-color: #fff;
    color: #191a1b;
}
.goBack {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
}
.goBack img {
    width: 30px;
}
</style>