import React, { Component } from 'react'
import  menuModel from "../model/menuModel"

export default class AddMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:"",
            path:"",
            component:""
        }
    }
    add = ()=>{
        let  {msg,path,component} = this.state;
        //少一个验证
        menuModel.add({msg,path,component}).then(res=>{
            if(Object.keys(res.data).length){
                alert("新增成功")
            }
        })
    }

    render() {
        return (
            <div>
               菜单名称<input value={this.state.msg} onChange={(e)=>{
                   this.setState({
                       msg:e.target.value
                   })

               }}/>
               菜单路径<input  value={this.state.path} onChange={(e)=>{
                   this.setState({
                       path:e.target.value
                   })

               }}/>
               组件名称<input  value={this.state.component} onChange={(e)=>{
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
