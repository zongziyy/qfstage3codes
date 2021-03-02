import React, { Component } from 'react'
import  bus from "../../event";

export default class child2 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                我是子元素二{this.props.username}
                <button onClick={()=>{
                    alert(this.props.username);
                }}>点击获取子元素的内容</button>

                <button onClick={()=>{
                    bus.emit("getusername",(username)=>{
                        
                        alert("得到兄弟的数据为:"+username);
                    })
                }}>
                    利用events获取数据
                </button>

            </div>
        )
    }
}
