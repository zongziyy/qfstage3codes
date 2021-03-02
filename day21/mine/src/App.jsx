import React, { Component } from 'react';
import RouterView from './router'


export default class App extends Component {
    render() {
        return (
            <>
                <div className="menu">
                    <a href="#/">首页</a>
                    <a href="#/about">关于</a>
                    <a href="#/list">列表</a>
                </div>
                <RouterView />
            </>

        )
    }
}
