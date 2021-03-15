import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initUserList, addUser, deleteUser } from "../action/userAction"
import userModel from "../model/userModel"
import "../css/menu3.css";

export default () => {
    //页面加载完成以后 请求数据

    // const [userList, setUserList] = useState([])
    const userList = useSelector(state => state.userInfo.list);//取全局的集合
    let dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [userpwd, setUserpwd] = useState("");

    useEffect(async () => {//页面加载完成以后的判断
        if (!userList.length) {
            let { data: list } = await userModel.query();//请求数据
            dispatch(initUserList(list));//把数据放到全局
        }

    }, []);

    let add = () => {
        // alert("新增"+username+"密码"+userpwd);
        userModel.add({username,userpwd}).then(res=>{
            dispatch(addUser(res.data));
        })
    }
    let delUser=(id)=>{
        userModel.del(id).then(()=>{
            dispatch(deleteUser(id));
        })
    }
    return (
        <div>
            <div>
                用户名<input value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }} />
                      密码<input value={userpwd} onChange={(e) => {

                    setUserpwd(e.target.value)

                }} />
                <button onClick={() => {
                    add();
                }}>新增</button>
            </div>

            <div className="table">
                <div className="tr">
                    <div className="tr-item">编号</div>
                    <div className="tr-item">姓名</div>
                    <div className="tr-item">密码</div>
                    <div className="tr-item">操作</div>
                </div>
                {userList.map(item => {
                    return (<div className="tr" key={item.id}>
                        <div className="tr-item">{item.id}</div>
                        <div className="tr-item">{item.username}</div>
                        <div className="tr-item">{item.userpwd}</div>
                        <div className="tr-item" onClick={() => {
                           delUser(item.id);
                        }}>删除</div>
                    </div>)
                })}
            </div>
        </div>
    )
}


// export default ()=> {

//     const [num, setNum] = useState(10)

//     //生命周期 页面加载完成
//     useEffect(() => {
//        console.log("页面加载完成");
//     },[])

//     //页面销毁
//     useEffect(() => {
//         return () => {
//             console.log("页面销毁")
//         }
//     }, [])


//     //更新或者监听
//     useEffect(() => {
//         if(num!=10){
//         console.log("watch"+num);
//         }
//     }, [num])



//     return (
//         <div>
//             {num}<button onClick={()=>{
//                 setNum(num+1)
//             }}>+</button>
//         </div>
//     )
// }


// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import  {initUserList,addUser,deleteUser} from "../action/userAction"
// import  userModel from  "../model/userModel"
// import  "../css/menu3.css";

// class Menu3 extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             username:"",
//             userpwd:""
//         }
//     }

//     async  componentDidMount(){
//         //没有就请求
//         if(!this.props.userList.length){
//             let  {data:userList}=await userModel.query();
//             this.props.initUserList(userList);
//         }
//     }

//     add = async ()=>{
//         let  {username,userpwd} = this.state;//把数据进行新增
//         userModel.add({username,userpwd}).then(res=>{
//             this.props.addUser(res.data);
//         })
//     }
//     delUser = (id)=>{
//         userModel.del(id).then(()=>{
//             this.props.deleteUser(id);
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     用户名<input value={this.state.username} onChange={(e)=>{
//                         this.setState({
//                             username:e.target.value
//                         })
//                     }}/>
//                      密码<input value={this.state.userpwd} onChange={(e)=>{
//                         this.setState({
//                             userpwd:e.target.value
//                         })
//                     }}/>
//                     <button onClick={()=>{
//                         this.add();
//                     }}>新增</button>
//                 </div>
//                 <div className="table">
//                     <div className="tr">
//                         <div className="tr-item">编号</div>
//                         <div className="tr-item">姓名</div>
//                         <div className="tr-item">密码</div>
//                         <div className="tr-item">操作</div>
//                     </div>
//                     {this.props.userList.map(item=>{
//                         return (<div className="tr" key={item.id}>
//                         <div className="tr-item">{item.id}</div>
//                         <div className="tr-item">{item.username}</div>
//                         <div className="tr-item">{item.userpwd}</div>
//                         <div className="tr-item" onClick={()=>{
//                             this.delUser(item.id);
//                         }}>删除</div>
//                     </div>)
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({//数据
//     userList:state.userInfo.list   
// })

// const mapDispatchToProps = { //数据修改的方法
//     initUserList,addUser,deleteUser
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Menu3)
