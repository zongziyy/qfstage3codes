import React, { Component } from 'react';
import userModel from '../model/userModel'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userpwd: ''
        }
    }

    login = async () => {
        let { username, userpwd } = this.state;
        let { data } = await userModel.login({ username, userpwd });
        if (data.length) {
            localStorage.setItem('userinfo', JSON.stringify(data[0]));
            this.props.history.push('/menu')
        } else {
            alert('用户名密码不匹配');
        }
    }
    render() {
        return (
            <div className='login'>
                <p>用户登录</p>
                <div className="username">
                    用户名:<input value={this.state.username} onChange={(e) => {
                        this.setState({
                            username: e.target.value
                        })
                    }} />
                </div>
                <div className="username">
                    密&emsp;码:<input value={this.state.userpwd} onChange={(e) => {
                        this.setState({
                            userpwd: e.target.value
                        })
                    }} />
                </div>
                <button onClick={this.login}>登录</button>
            </div>
        )
    }
}
