import React, { Component } from 'react'
import  myMenu from "../HOC/myMenu";
import myRouter from "../HOC/myRouter";

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu:null,
            router:""
        }
    }
    componentDidMount(){
        let userinfo  = window.localStorage.getItem("userinfo");
        if(userinfo){
            let obj  = JSON.parse(userinfo);
            // console.log(obj);
           //去生成菜单和路由
           this.setState({
               menu:myMenu(obj),
               router:myRouter(obj)
           })

        }else{
            this.props.history.push("/");
        }

    }


    render() {
        return (
            <div>      
               {this.state.menu? <this.state.menu></this.state.menu>:""}  
               {this.state.router? <this.state.router></this.state.router>:""}       
            </div>
        )
    }
}
