import React, { Component } from 'react';
import headerClass from '../css/Styles'

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 5,
            list: [1, 2, 3, 4]
        }
    }
    add = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        let lists = this.state.list.map((item, index) => {
            return <div key={index} >{item}</div>
        })
        return (
            <div style={headerClass.header}>
                <button onClick={() => { this.add() }}>{this.state.num}</button>
                <div>{this.state.num % 2 == 0 ? "偶数" : "奇数"}</div>
                {lists}
                {this.state.list.map((item, index) => {
                    return <button key={index}>{item}</button>
                })}
            </div>
        )
    }
}
