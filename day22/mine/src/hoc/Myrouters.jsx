import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
// import  userMenuModel from "../model/userMenuModel"
import comInfo from "./com";

export default (userinfo) => {
    class Myrouters extends Component {
        constructor(props) {
            super(props);
            this.state = {
                routerList: []
            }
        }
        componentDidMount() {
            if (userinfo.usertype == 1) {
                this.setState({
                    routerList: [
                        { path: '/menu/', component: 'Adduser', exact: true },
                        { path: "/menu/adduser", component: "Adduser" },
                        { path: "/menu/addmenu", component: "Addmenu" },
                        { path: "/menu/addusermenu", component: "SetMenus" },
                        { path: "/menu/page1", component: "Page1" },
                        { path: "/menu/page2", component: "Page2" },
                    ]
                })
            } else {
                console.log("666")
            }
        }
        render() {
            return (
                <Router>
                    <Switch>
                        {this.state.routerList.map((item, index) => {
                            return <Route path={item.path} component={comInfo[item.component]} exact={item.exact} key={index}></Route>
                        })}
                    </Switch>
                </Router>
            )
        }
    }

    return Myrouters
}
