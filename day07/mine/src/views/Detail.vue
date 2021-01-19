<template>
    <div class="a">123</div>
</template>

<script>
import movieModel from "../model/detail";
import bus from "../bus";

export default {
    data() {
        return {
            movieDetail: {},
        };
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