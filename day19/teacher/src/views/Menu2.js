import React, { Component } from 'react'

export default class Menu2 extends Component {
    constructor(props){
        super(props);
        this.state={
            username:""
        }

    }
    render() {
        return (
            <div>
                用户名<input value={this.state.username} onChange={(e)=>{
                    this.setState({
                        username:e.target.value
                    })

                }}/>
                <button onClick={
                    ()=>{
                        alert(this.state.username)
                    }
                }>获取</button>


用户名<input ref="username"/>
                <button onClick={
                    ()=>{
                        alert(this.refs.username.value)
                    }
                }>获取</button>
            </div>
        )
    }
}
