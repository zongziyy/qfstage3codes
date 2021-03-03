import React, { Component } from 'react'
import userMenuModel from "../model/userMenuModel";


export default (userinfo) => {

  class mymenu extends Component {
    constructor(props){//声明数据
        super(props);

        this.state = {
            menuList:[]
        }
    }
    
   async componentDidMount(){//页面结构加载完成
        if(userinfo.usertype==1){//管理员
            this.setState({
                menuList:[{path:"/menu/",msg:"新增用户"},
                {path:"/menu/addmenu",msg:"新增菜单"},
                {path:"/menu/addusermenu",msg:"菜单分配"}],
            })
        }else{
            let userid = userinfo.id;
            let {data:menuList} =await userMenuModel.query({userid});
            this.setState({
                menuList
            })
        }


    }

        render() {
            return (
                <div className="menu">
                    {this.state.menuList.map((item,index)=>{
                        return <a href={"#"+item.path} key={index}>{item.msg} </a>
                    })}
            </div>
            )
        }
    }

    return  mymenu
    
}
