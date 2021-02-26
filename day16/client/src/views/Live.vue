<template>
    <div id="box">
        <div id="dplayer"></div>
        <div id="list"></div>
        <div id="footer">
            <input v-model="msg" /> <button @click="send">发送</button>
        </div>
    </div>
</template>
<style scoped>
#dplayer {
    height: 400px;
    width: 600px;
    position: relative;
}
.item {
    width: 200px;
    height: 40px;
    position: absolute;
    background-color: brown;
    color: burlywood;
    top: 0;
    right: 0;
}
</style>
<script>
import Hls from "hls.js";
import DPlayer from "dplayer";
export default {
    data() {
        return {
            msg: "",
        };
    },
    methods: {
        send() {
            //点击按钮
            //将msg发送到后端
            let info = {
                type: 1, //表示普通用户
                msg: this.msg,
            };

            this.ws.send(JSON.stringify(info)); //只能接收字符串
        },
    },
    mounted() {
        this.ws = new WebSocket("ws://192.168.60.196:8911");
        this.container = document.getElementById("dplayer");
        this.listDiv = document.getElementById("list");

        this.ws.onmessage = (evt) => {
            //接收后端发送来的消息
            //  console.log(evt.data);
            let msg = evt.data; //数据都是字符串

            let obj = JSON.parse(msg); //转成对象
            if (obj.type == 1) {
                //普通用户
                let p = document.createElement("p");
                p.style.right = 0;
                p.style.top = Math.round(Math.random() * 300) + 10 + "px";
                p.style.position = "absolute";
                p.style.color = "red";
                p.innerHTML = obj.msg;
                this.container.appendChild(p);
                //让p标签动起来
                p.timer = setInterval(() => {
                    p.style.left = p.offsetLeft - 5 + "px"; //每次往左边移动五个像素
                    if (parseInt(p.style.left) <= 0) {
                        //到达了终点
                        clearInterval(p.timer);
                        p.remove();
                    }
                }, 200);
            } else {
                //表示直播员
                let p = document.createElement("p");
                p.innerHTML = obj.msg;
                this.listDiv.appendChild(p);
            }
        };

        this.dp = new DPlayer({
            container: this.container,
            live: true,
            video: {
                url:
                    "https://tx.hls.huya.com/src/352961616-352961616-1515958597463310336-706046688-10057-A-0-1-imgplus_2000.m3u8?wsSecret=a0c3a7482948568dbe7b3ac01f2dcd70&wsTime=60375ffb&u=0&seqid=16141553887566908&ctype=tars_mobile&txyp=o%3Acs6%3B&fs=bgct&sphdcdn=al_7-tx_3-js_3-ws_7-bd_2-hw_2&sphdDC=huya&sphd=264_*-265_*&t=103",
                type: "customHls",
                customType: {
                    customHls: function (video) {
                        const hls = new Hls();
                        hls.loadSource(video.src);
                        hls.attachMedia(video);
                    },
                },
            },
        });
    },
};
</script>