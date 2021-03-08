import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import userMenuModel from "../model/userMenuModel";
import componentInfo from "../components";


export default (userinfo) => {


    class myRouter extends Component {

        constructor(props) {
            super(props);
            this.state = {
                routerList: []
            }
        }

       async componentDidMount() {
            if (userinfo.usertype == 1) {
                this.setState({
                    routerList: [{
                        id: 1,
                        path: "/menu/",
                        component: "AddUser",
                        exact: true
                    }, {
                        id: 2,
                        path: "/menu/adduser",
                        component: "AddUser",
                    }, {
                        id: 3,
                        path: "/menu/addmenu",
                        component: "AddMenu",
                    }, {
                        id: 4,
                        path: "/menu/addusermenu",
                        component: "AddUserMenu",
                    },{
                        id: 5,
                        path: "/menu/page1",
                        component: "Page1",
                    },{
                        id: 6,
                        path: "/menu/page2",
                        component: "Page2",
                    }]
                })
            } else {//普通用户的路由
                let  {data:routerList}=await userMenuModel.query({userid:userinfo.id});
                routerList.push({
                    id:99999,
                    path:"/menu/",
                    component:routerList[0].component,
                    exact:true
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
                        {this.state.routerList.map(item => {
                            return <Route path={item.path} component={componentInfo[item.component]} exact={item.exact} key={item.id}></Route>
                        })}
                    </Switch>
                </Router>
            )
        }
    }

    return myRouter;

}
