import React, { Component } from 'react'
import Child2 from "./child2";
export default class child1 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                子元素
                <Child2 num={this.props.num}></Child2>
            </div>
        )
    }
}
