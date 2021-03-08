import React, { Component } from 'react'
import userModel from "../model/userModel";
import store from "../store";
import { initUserList,addUserList } from "../action/userAction"
import { connect } from 'react-redux';

 class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userpwd: "",
        }
    }
    async componentDidMount() {
        console.log(this.props.userList);
        if (!this.props.userList.length) {
            let { data: userList } = await userModel.query({ usertype: 2 });//获取用户列表
           
            this.props.initUserList(userList);//变成全局数据
        }
    }
    add = async () => {
        //表单验证

        //用户名是否存在
        let { username, userpwd } = this.state;

        let { data: userList } = await userModel.query({ username });

        if (userList.length) {
            alert("该用户名已经存在");
        } else {
            userModel.add({ username, userpwd, usertype: 2 }).then((res) => {
                alert("新增成功");
               this.props.addUserList(res.data);
            }, () => {
                alert("新增失败");
            })
        }




    }
    render() {
        return (
            <div>
                <div>
                    用户名:<input value={this.state.username} onChange={(e) => {
                        this.setState({
                            username: e.target.value
                        })
                    }} />
                </div>
                <div>
                    密码:<input value={this.state.userpwd} onChange={(e) => {
                        this.setState({
                            userpwd: e.target.value
                        })
                    }} />
                </div>
                <button onClick={() => {
                    this.add();
                }}>新增</button>

                <div className="menulist">
                    <div className="tr">
                        <div className="tr-item">编号</div>
                        <div className="tr-item">姓名</div>
                        <div className="tr-item">秘密</div>
                        <div className="tr-item">操作</div>
                    </div>
                    {store.getState().userInfo.list.map((item, index) => {
                        return (<div className="tr" key={index}>
                            <div className="tr-item">{item.id}</div>
                            <div className="tr-item">{item.username}</div>
                            <div className="tr-item">{item.userpwd}</div>
                            <div className="tr-item">删除</div>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userList:state.userInfo.list
    
})

const mapDispatchToProps = {
    addUserList,
    initUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)