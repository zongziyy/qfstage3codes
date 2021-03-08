import React, { Component } from 'react'
import store from '../store'

export default class Page2 extends Component {
    render() {
        return (
            <div>
                页面2
                <div>数据为{store.getState().num}</div>
                <button onClick={() => {
                    store.dispatch({ type: 'add', n: 5 });
                    this.forceUpdate()
                }}>+</button>
            </div>
        )
    }
}
