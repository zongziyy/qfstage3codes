import React, { Component } from 'react'
import userModel from '../model/userModel'

export default class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userpwd: ''
        }
    }
    addUser = async () => {
        let { username, userpwd } = this.state;
        let { data } = await userModel.query({ username });
        if (data.length) {
            alert('该用户名已存在');
        } else {
            let { data: result } = await userModel.add({ username, userpwd, usertype: 2 });
            // console.log(result);
            if (Object.keys(result).length) {
                alert("新增成功")
            }

        }
    }
    render() {
        return (
            <div>
                <p>新增用户</p>
                <div>用户名:<input value={this.state.username} onChange={(e) => {
                    this.setState({
                        username: e.target.value
                    })
                }} /></div>
                <div>密&emsp;码:<input value={this.state.userpwd} onChange={(e) => {
                    this.setState({
                        userpwd: e.target.value
                    })
                }} /></div>
                <button onClick={this.addUser}>新增</button>
            </div>
        )
    }
}
