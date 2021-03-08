import React, { Component } from 'react'
import  userMenuModel from "../model/userMenuModel";

export default (userinfo) => {
     class myMenu extends Component {
        constructor(props){
            super(props);
            this.state = {
                menuList:[],
            }
        }
       async componentDidMount(){
            if(userinfo.usertype ==1){//管理员
                this.setState({
                    menuList:[{
                        id:1,
                        msg:"新增用户",
                        path:"/menu/"
                    },{
                        id:2,
                        msg:"新增菜单",
                        path:"/menu/addmenu"
                    },{
                        id:3,
                        msg:"分配菜单",
                        path:"/menu/addusermenu"
                    },
                    {
                        id:4,
                        msg:"页面1",
                        path:"/menu/page1"
                    },{
                        id:5,
                        msg:"页面2",
                        path:"/menu/page2"
                    }]
                })

            }else{
                //根据用户编号 查询获取
            let  {data:menuList} =  await userMenuModel.query({userid:userinfo.id});
            this.setState({
                menuList
            })
            }

        }
        
        render() {
            return (
                <div className="menu">
                    {this.state.menuList.map((item,index)=>{
                        return <span key={item.id}> <a href={"#"+item.path}  >{item.msg}</a>{index<this.state.menuList.length-1?"|":""}</span>
                    })}
                </div>
            )
        }
    }
    return  myMenu  
}
