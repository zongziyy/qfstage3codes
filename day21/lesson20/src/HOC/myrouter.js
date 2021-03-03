import React, { Component } from 'react'
import  {HashRouter as Router,Route,Switch} from "react-router-dom"
import  userMenuModel from "../model/userMenuModel"
import  comInfo from "./com";

export default (userinfo) => {

  class myrouter extends Component {

    constructor(props){//声明数据格式
        super(props);

        this.state = {
            routerList:[]
        }
    }
  async  componentDidMount(){//页面结构加载完成
        if(userinfo.usertype==1){//管理员
            this.setState({
                routerList:[{path:"/menu/",component:"AddUser",exact:true},
                {path:"/menu/adduser",component:"AddUser"},
                {path:"/menu/addmenu",component:"AddMenu"},
                {path:"/menu/addusermenu",component:"AddUserMenu"}],
            })
        }else{
            let userid = userinfo.id;//找到用户的id
            let {data:routerList} =await userMenuModel.query({userid});
            // console.log(routerList)
            routerList.push({//解决默认选中
                path:"/menu/",component:routerList[0].component,exact:true
            })

       
            this.setState({
                routerList
            })

        }


    }

        render() {
            return (
            <Router>
                <Switch>
                    {this.state.routerList.map((item,index)=>{
                        return  <Route path={item.path} component={comInfo[item.component]} exact={item.exact} key={index}></Route>
                    })}
                </Switch>
            </Router>
            )
        }
    }

    return  myrouter
    
}
