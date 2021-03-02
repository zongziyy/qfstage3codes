import React, { Component } from 'react'
import  RouterView  from  "./router";


//Router表示整个路由
//每一个路由
//exact 表示严格匹配
//Switch  每次只匹配一次
export default class App extends Component {
    render() {
        return (
            <div>
                 <div className="menu">
                    <a href="#/">首页</a>|
                    <a href="#/about">关于</a>|
                    <a href="#/list">列表</a>
                </div>
                <RouterView></RouterView>
            </div>
        )
    }
}
