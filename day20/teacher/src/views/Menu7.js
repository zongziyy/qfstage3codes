import React, { Component } from 'react'
import  Child1 from "../components/menu7/child1";

export default class Menu7 extends Component {
    constructor(props){
        super(props);
        this.state={
            num:10,
            username:""
        }
    }
    setUsername=(username)=>{
        this.setState({
            username
        })
    }

    render() {
        return (
            <div>
                {this.state.username}
                <button onClick={()=>{
                    alert(this.refs.child1.refs.username.value);
                }}>点击获取子元素的内容</button>
                <Child1 num={this.state.num} ref="child1" fn={this.setUsername}>
                    <button>+</button>
                </Child1>
            </div>
        )
    }
}
