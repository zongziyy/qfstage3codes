<template>
    <div class="content">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul>
                <li v-for="item in movieList" :key="item.filmsId">
                    <div class="letf">
                        <img :src="item.poster" alt="" />
                    </div>
                    <div class="center">
                        <p>
                            {{ item.name
                            }}<span class="type">{{ item.item.name }}</span>
                        </p>
                        <p>
                            主要演员:
                            <span>{{ item.actors | filterActor }}</span>
                        </p>
                        <p>
                            上映日期：<span class="runtime">{{
                                new Date(item.premiereAt * 1000).dateformater(
                                    "ww mm月dd日"
                                )
                            }}</span>
                        </p>
                    </div>
                    <div class="right">
                        <button>预购</button>
                    </div>
                </li>
            </ul>
        </van-pull-refresh>
    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.content ul li {
    box-sizing: border-box;
    padding: 15px;
    width: 100%;
    display: flex;
    align-items: center;
}
.content ul li .left {
    flex: 1;
    height: 100px;
}
.content ul li .left img {
    height: 100%;
}
.content ul li .center {
    flex: 4;
    padding: 0 10px;
    overflow: hidden;
}
.content ul li .center p {
    font-size: 13px;
    height: 20px;
    line-height: 20px;
    color: #79728d;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.content ul li .center .type {
    font-size: 12px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
}
.content ul li .center .score {
    color: #ffb232;
    font-size: 14px;
}
.content ul li .center p:first-of-type {
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    color: #191a1b;
}
.content ul li .center p:nth-of-type(2) {
    height: 21px;
    line-height: 21px;
    color: #191a1b;
}
.right button {
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ffb232;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    border-style: solid;
    border-color: #ffb232;
    background-color: #fff;
}
</style>

<script>
import movies from "../../model/movies";
import { Toast } from "vant";

Date.prototype.dateformater = function (str) {
    let year = this.getFullYear();
    let month = this.getMonth() + 1;
    let date = this.getDate();
    let week = this.getDay();
    let day = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

    return str
        .replace("yyyy", year)
        .replace("mm", month)
        .replace("dd", date)
        .replace("ww", day[week]);
};
export default {
    data() {
        return {
            movieList: [],
            count: 0,
            isLoading: false,
        };
    },
    created() {
        movies.comingMovies().then((res) => {
            this.movieList = res.data.data.films;
            console.log(this.movieList);
        });
    },
    filters: {
        filterActor(list) {
            if (list) {
                return list.map((item) => item.name).join(" ");
            } else {
                return "暂无演员";
            }
        },
    },
    methods: {
        onRefresh() {
            movies.comingMovies().then((res) => {
                this.movieList = res.data.data.films;
                Toast("刷新成功");
                this.isLoading = false;
                this.count++;
            });
        },
    },
};
</script>