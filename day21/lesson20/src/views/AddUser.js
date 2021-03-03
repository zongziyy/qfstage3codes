import React, { Component } from 'react'
import userModel from "../model/userModel"

export default class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userpwd: ""
        }

    }

    add = async () => {
        let { username, userpwd } = this.state;
        let { data } = await userModel.query({ username });
        if (data.length) {
            alert("该用户名已经存在")
        } else {
            let {data} = await userModel.add({ username, userpwd, usertype: 2 });

            if(Object.keys(data).length){
                alert("新增成功");
            }
        }

    }

    render() {
        return (
            <div>
                <div>用户名:<input value={this.state.username} onChange={(e) => {
                    this.setState({
                        username: e.target.value
                    })
                }} /></div>
                <div>密码:<input value={this.state.userpwd} onChange={(e) => {
                    this.setState({
                        userpwd: e.target.value
                    })
                }} /></div>
                <div><button onClick={() => {
                    this.add();
                }}>新增</button></div>
            </div>
        )
    }
}
