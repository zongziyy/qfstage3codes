//rcr
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import  {addUserList} from "../action/userAction"

// class AddMenu extends Component {
//     constructor(props){
//         super(props);
//         console.log(this.props.userList);

//     }
//     render() {
//         return (
//             <div>
//                 测试
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     userList:state.userInfo.list
    
// })

// const mapDispatchToProps = {
//     addUserList
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddMenu)




import React, { Component } from 'react'
import menuModel from "../model/menuModel";
export default class AddMenu extends Component {
    constructor(props){
        super(props);
        this.state ={
            msg:"",
            path:"",
            component:""
        }
    }
    add=async ()=>{
        let  {msg,path,component} = this.state;
        let {data:menuList} =await menuModel.query({msg});
        if(menuList.length){
            alert("菜单名已经存在");
        }else{
            menuModel.add({
                msg,path,component
            }).then(()=>{
                alert("菜单新增成功")
            },()=>{
                alert("菜单新增失败");
            })

        }


    }

    render() {
        return (
            <div>
                菜单名称<input value={this.state.msg} onChange={(e)=>{
                    this.setState({
                        msg:e.target.value
                      })
                }}/> 菜单路径 <input value={this.state.path} onChange={(e)=>{
                    this.setState({
                        path:e.target.value
                      })
                }}/>菜单组件<input value={this.state.component} onChange={(e)=>{
                    this.setState({
                        component:e.target.value
                      })
                }}/>
                <button onClick={()=>{
                    this.add()
                }}>新增</button>
            </div>
        )
    }
}
