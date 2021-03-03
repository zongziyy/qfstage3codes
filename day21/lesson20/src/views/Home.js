import React, { Component } from 'react'
import userModel from "../model/userModel";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state= {
            username:"",
            userpwd:""
        }
    }
    login= async ()=>{
        let {username,userpwd} = this.state;

        let {data}=   await userModel.login({username,userpwd});

        if(data.length){
            //登录成功
           //
           window.localStorage.setItem("userinfo",JSON.stringify(data[0]))
           this.props.history.push("/menu");

        }else{
            alert("用户名和密码不匹配");
        }

    }

    render() {

        return (
            <div>
                <div>用户名<input value={this.state.username} onChange={(e)=>{
                        this.setState({
                            username:e.target.value
                        })
                }}/></div>
                <div>密码<input value={this.state.userpwd} onChange={(e)=>{
                    this.setState({
                        userpwd:e.target.value
                    })
                }}/></div>
                <div><button onClick={()=>{
                    this.login();
                }}>登录</button></div>
            </div>
        )
    }
}
