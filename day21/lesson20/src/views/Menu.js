import React, { Component } from 'react'
import  MyMenu from "../HOC/mymenu";
import  MyRouter from "../HOC/myrouter"


export default class Menu extends Component {
    constructor(props){
        super(props);
        let  userinfo  = window.localStorage.getItem("userinfo");
        if(userinfo){
            //解析
            let  obj  = JSON.parse(userinfo);
            //取出用户类别
           //管理员 进入用户新增   新增菜单   新增用户菜单权限
           this.state ={
               menu:MyMenu(obj),
               router:MyRouter(obj)
           }  
        }else{
            this.props.history.push("/");
        }
    }


    render() {
        return (
            <div>
                    <this.state.menu></this.state.menu>
                    <this.state.router></this.state.router>
            </div>
        )
    }
}
