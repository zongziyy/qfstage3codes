import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                我是首页<button onClick={
                    ()=>{
                        this.props.history.push({
                            pathname:"/list"
                        })
                    }
                }>点击跳转到列表</button>
            </div>
        )
    }
}
