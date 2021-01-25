<template>
    <div class="mine">
        <main>
            <div class="login">
                <img
                    src="https://bsaccount-1256119282.cos.ap-chengdu.myqcloud.com/Avatar.png"
                    alt=""
                />
                <a href="">注册</a>
                <a href="">登录</a>
                <a href="">黑鲨会员</a>
            </div>
            <div class="title">
                <h2>我的订单</h2>
                <a href="">查看全部订单 ></a>
            </div>
            <ul class="myindent">
                <li>
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>待付款</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>待发货</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>待收货</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>待评价</p>
                    </a>
                </li>
            </ul>
            <div class="title">
                <h2>常用工具</h2>
            </div>
            <ul class="myindent tools">
                <li class="red">
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>地址管理</p>
                    </a>
                </li>
                <li class="red">
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>我的优惠券</p>
                    </a>
                </li>
                <li class="red">
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>我的预约</p>
                    </a>
                </li>
                <li class="red">
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>我的拼团</p>
                    </a>
                </li>
                <li class="blue">
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>售后服务</p>
                    </a>
                </li>
                <li class="blue">
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>数字评测</p>
                    </a>
                </li>
                <li class="blue">
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>邀友有奖</p>
                    </a>
                </li>
                <li class="blue">
                    <a href="">
                        <i class="iconfont icon-jilu"></i>
                        <p>文章收藏</p>
                    </a>
                </li>
            </ul>
        </main>
    </div>
</template>

<style scoped>
header {
    font-size: 0.38rem;
    height: 0.85rem;
    line-height: 0.85rem;
    text-align: center;
    display: flex;
    color: #fff;
    padding: 0 0.28rem;
    justify-content: space-between;
    background: linear-gradient(90deg, #09d166, #00bd58);
}
header,
footer {
    flex-shrink: 0;
}
main {
    flex-grow: 1;
    overflow-y: scroll;
    background-color: #efeff4;
}

main .login {
    line-height: 1.7rem;
    font-size: 0;
    padding-left: 0.3rem;
    background: linear-gradient(90deg, #09d166, #00bd58);
    position: relative;
}
main .login img {
    width: 50px;
    vertical-align: middle;
}
main .login a {
    display: inline-block;
    font-size: 0.32rem;
    vertical-align: middle;
    color: #fff;
    width: 1.07rem;
    line-height: 0.52rem;
    text-align: center;
}
main .login a:last-of-type {
    width: 1.94rem;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 0.52rem;
    margin: auto;
    border-radius: 999rem 0 0 999rem;
    /* float: right; */
    font-size: 0.26rem;
    background: linear-gradient(90deg, #009c49, #19eb7b);
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    line-height: 0.87rem;
    height: 0.87rem;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
}
.title h2 {
    border-left: 0.08rem solid #e94544;
    text-indent: 0.14rem;
    line-height: 0.3rem;
    height: 0.3rem;
    font-size: 0.3rem;
}
.title a {
    color: #999;
    font-size: 0.24rem;
}

.myindent {
    background-color: #fff;
}
.myindent {
    display: flex;
    margin-bottom: 0.2rem;
}
.myindent li {
    width: 25%;
    text-align: center;
    padding: 0.3rem 0;
}
.myindent li a {
    display: inline-block;
    height: 100%;
}
.myindent li .iconfont {
    font-size: 0.45rem;
    display: inline-block;
    line-height: 0.8rem;
}
.myindent li p {
    font-size: 0.25rem;
    line-height: 0.25rem;
}

.tools {
    flex-wrap: wrap;
}
.tools .red .iconfont {
    color: #fb7865;
}
.tools .blue .iconfont {
    color: #008ee7;
}

footer ul {
    display: flex;
    border-top: 0.02rem solid #cdcdcd;
}
footer ul li {
    width: 50%;
    height: 0.98rem;
    text-align: center;
}
footer ul li a {
    display: block;
    width: 100%;
    height: 100%;
}
footer ul li .iconfont {
    font-size: 0.4rem;
    display: inline-block;
    height: 0.4rem;
    margin-top: 0.15rem;
    line-height: 0.4rem;
}
footer ul li p {
    font-size: 0.18rem;
    line-height: 0.39rem;
}
footer ul li:hover {
    color: #fe5466;
}
footer ul li:last-of-type {
    color: #fe5466;
}
</style>