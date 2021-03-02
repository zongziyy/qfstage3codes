import React, { Component } from 'react'
import  bus from "../../event";

export default class child1 extends Component {
    constructor(props){
        super(props);
        this.state= {
            username:""
        }
    }
    componentDidMount(){
        bus.addListener("getusername",(fn)=>{
            fn(this.state.username);
        })
    }


    render() {
        return (
            <div>
                我是子元素一
                <input value={this.state.username} onChange={(e)=>{
                    this.setState({
                        username:e.target.value
                    },()=>{
                        this.props.fn(this.state.username);
                    })
                }}/>

            </div>
        )
    }
}
