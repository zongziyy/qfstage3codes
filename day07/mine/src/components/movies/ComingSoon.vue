<template>
    <div class="content">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                :immediate-check="false"
            >
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
                                    new Date(
                                        item.premiereAt * 1000
                                    ).dateformater("ww mm月dd日")
                                }}</span>
                            </p>
                        </div>
                        <div class="right">
                            <button>预购</button>
                        </div>
                    </li>
                </ul>
            </van-list>
        </van-pull-refresh>
    </div>
</template>


<script>
import movies from "../../model/movies";
// import { Toast } from "vant";

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
            loading: false,
            finished: false,
            refreshing: false,
            pageNum: 1,
            total: 50,
        };
    },
    created() {
        movies
            .comingMovies({
                cityId: 420100,
                pageNum: 1,
                pageSize: 10,
                type: 2,
                k: 7153085,
            })
            .then((res) => {
                this.movieList = res.data.data.films;
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
        onLoad() {
            if (this.refreshing) {
                this.movieList = [];
                this.refreshing = false;
            }
            this.pageNum++;
            movies
                .comingMovies({
                    cityId: 420100,
                    pageNum: this.pageNum,
                    pageSize: 10,
                    type: 2,
                    k: 7153085,
                })
                .then((res) => {
                    this.movieList = [
                        ...this.movieList,
                        ...res.data.data.films,
                    ];
                    this.loading = false;
                    if (this.movieList.length >= this.total) {
                        this.finished = true;
                    }
                });
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;
            this.pageNum = 0;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
    },
};
</script>




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