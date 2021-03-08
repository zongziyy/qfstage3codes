import React, { Component } from 'react'
import store from '../store'

export default class Page1 extends Component {
    render() {
        return (
            <div>
                页面1
                <div>数据为{store.getState().num}</div>
                <button onClick={() => {
                    store.dispatch({ type: 'red', n: 5 });
                    this.forceUpdate()
                }}>-</button>
            </div>
        )
    }
}
