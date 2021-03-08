import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import Login from "../views/Login";
import Menu from "../views/Menu";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerList:[{
                id:1,path:"/",component:Login,exact:true
            },{
                id:2,path:"/menu",component:Menu
            }]
        }

    }

    render() {
        return (
            <Router>
                <Switch>
                    {this.state.routerList.map(item=>{
                        return <Route key={item.id} path={item.path} component={item.component} exact={item.exact}></Route>
                    })}

                </Switch>

            </Router>
        )
    }
}
