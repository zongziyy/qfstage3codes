import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import loadable from '../utils/loadable'


import NotFound from "../views/NotFound";


const Home = loadable(() => import("../views/Home"))
const Menu = loadable(() => import("../views/Menu"))

//路由懒加载


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerList: [{
                id: 1,
                path: "/",
                com: Home,
                exact: true
            },
            {
                id: 2,
                path: "/menu",
                com: Menu
            }
        ]
        }

    }
    render() {
        return (
            <Router>
                <Switch>
                    {this.state.routerList.map(item => {
                        return <Route path={item.path} component={item.com} exact={item.exact} key={item.id}></Route>
                    })}

                    <Route path="/404" component={NotFound}></Route>
                    <Redirect path="*" to="/404"></Redirect>
                </Switch>
            </Router>
        )
    }
}
