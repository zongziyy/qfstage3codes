import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/index.scss'
import { initUserList, addUser } from '../actions/useractions'
import userModel from '../model/userModel'

class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userpwd: '',
        }
    }

    async componentDidMount() {
        if (!this.props.userList.length) {
            let { data: userList } = await userModel.query({ usertype: 2 });
            this.props.initUserList(userList)
        }
    }
    addUser = async () => {
        let { username, userpwd } = this.state;
        if (!(username && userpwd)) {
            alert('请输入用户名和密码');
            return false;
        }
        let { data } = await userModel.query({ username });
        if (data.length) {
            alert('该用户名已存在');
        } else {
            userModel.add({ username, userpwd, usertype: 2 }).then((res) => {
                this.props.addUser(res.data)
                alert('新增成功')
            }, () => {
                alert('新增失败')
            })


        }
    }
    render() {
        return (
            <div className='adduser'>
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
                <div className="userList">
                    <div className="tr cl">
                        <div className="td">
                            编号
                        </div>
                        <div className="td">
                            名称
                        </div>
                        <div className="td">
                            用户类型
                        </div>
                        <div className="td">
                            操作
                        </div>
                    </div>
                    {this.props.userList.map(item => {
                        return <div className="tr cl" key={item.id}>
                            <div className="td">
                                {item.id}
                            </div>
                            <div className="td">
                                {item.username}
                            </div>
                            <div className="td">
                                {item.usertype == '2' ? "普通用户" : ""}
                            </div>
                            <div className="td">
                                删除
                    </div>
                        </div>
                    })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userList: state.userInfo.list
})

const mapDispatchToProps = {
    addUser, initUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(Adduser)



// import React, { Component } from 'react'
// import userModel from '../model/userModel'
// import '../css/index.scss'
// import { initUserList, addUser } from '../actions/useractions'
// import store from '../store'

// export default class Adduser extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             userpwd: '',
//             userList: []
//         }
//     }

//     async componentDidMount() {
//         let { data: userList } = await userModel.query({ usertype: 2 });
//         store.dispatch(initUserList(userList))
//         // console.log(store);
//         this.setState({
//             userList: this.props.userInfo.list
//         })

//     }
//     addUser = async () => {
//         let { username, userpwd } = this.state;
//         let { data } = await userModel.query({ username });
//         if (data.length) {
//             alert('该用户名已存在');
//         } else {
//             userModel.add({ username, userpwd, usertype: 2 }).then((res) => {
//                 store.dispatch(addUser(res.data))
//                 this.forceUpdate()
//                 alert('新增成功')
//             }, () => {
//                 alert('新增失败')
//             })


//         }
//     }
//     render() {
//         return (
//             <div className='adduser'>
//                 <p>新增用户</p>
//                 <div>用户名:<input value={this.state.username} onChange={(e) => {
//                     this.setState({
//                         username: e.target.value
//                     })
//                 }} /></div>
//                 <div>密&emsp;码:<input value={this.state.userpwd} onChange={(e) => {
//                     this.setState({
//                         userpwd: e.target.value
//                     })
//                 }} /></div>
//                 <button onClick={this.addUser}>新增</button>
//                 <div className="userList">
//                     <div className="tr cl">
//                         <div className="td">
//                             编号
//                         </div>
//                         <div className="td">
//                             名称
//                         </div>
//                         <div className="td">
//                             用户类型
//                         </div>
//                         <div className="td">
//                             操作
//                         </div>
//                     </div>
//                     {store.getState().userInfo.list.map(item => {
//                         return <div className="tr cl" key={item.id}>
//                             <div className="td">
//                                 {item.id}
//                             </div>
//                             <div className="td">
//                                 {item.username}
//                             </div>
//                             <div className="td">
//                                 {item.usertype}
//                             </div>
//                             <div className="td">
//                                 删除
//                     </div>
//                         </div>
//                     })}
//                 </div>

//             </div>
//         )
//     }
// }
