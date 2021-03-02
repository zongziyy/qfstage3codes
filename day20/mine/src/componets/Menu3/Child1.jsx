import React, { Component } from 'react';
import Child2 from "./Child2"

export default class Child1 extends Component {
    render() {
        return (
            <div>
                <div>子组件一</div>
                <Child2></Child2>
            </div>
        )
    }
}
