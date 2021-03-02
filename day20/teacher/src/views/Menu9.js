import React, { Component } from 'react'
import Child1  from  "../components/menu9/child1";
import Child2  from  "../components/menu9/child2";

export default class Menu9 extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:""
        }
    }
    getUsername = (username)=>{
        this.setState({
            username
        })
    }
    render() {
        return (
            <div>
                <Child1 fn={this.getUsername}></Child1>
                <Child2 username={this.state.username}></Child2>
            </div>
        )
    }
}
