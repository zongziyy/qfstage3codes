import React, { Component } from 'react'
import  userinfo from "../model/userinfo";

export default class Menu5 extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    userinfo.login({
                        username:"leson",
                        userpwd:"123456"
                    }).then(res=>{
                        console.log(res);
                    })

                }}>登录</button>
            </div>
        )
    }
}
