import React, { Component } from 'react'
import { connect } from 'react-redux'
import  {asyncInitUserList,asyncAddUser,asyncDeleteUser} from "../action/userAction"
import  "../css/menu3.css";

class Menu6 extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            userpwd:""
        }
    }

    componentDidMount(){
        //没有就请求
        if(!this.props.userList.length){
            this.props.asyncInitUserList();
        }
    }

    add = ()=>{
        let  {username,userpwd} = this.state;//把数据进行新增
        this.props.asyncAddUser({username,userpwd});
        
    }
    delUser = (id)=>{
        this.props.asyncDeleteUser(id);
    }

    render() {
        return (
            <div>
                <div>
                    用户名<input value={this.state.username} onChange={(e)=>{
                        this.setState({
                            username:e.target.value
                        })
                    }}/>
                     密码<input value={this.state.userpwd} onChange={(e)=>{
                        this.setState({
                            userpwd:e.target.value
                        })
                    }}/>
                    <button onClick={()=>{
                        this.add();
                    }}>新增</button>
                </div>
                <div className="table">
                    <div className="tr">
                        <div className="tr-item">编号</div>
                        <div className="tr-item">姓名</div>
                        <div className="tr-item">密码</div>
                        <div className="tr-item">操作</div>
                    </div>
                    {this.props.userList.map(item=>{
                        return (<div className="tr" key={item.id}>
                        <div className="tr-item">{item.id}</div>
                        <div className="tr-item">{item.username}</div>
                        <div className="tr-item">{item.userpwd}</div>
                        <div className="tr-item" onClick={()=>{
                            this.delUser(item.id);
                        }}>删除</div>
                    </div>)
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({//数据
    userList:state.userInfo.list   
})

const mapDispatchToProps = { //数据修改的方法
    asyncInitUserList,asyncAddUser,asyncDeleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu6)
