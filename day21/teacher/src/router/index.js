import { HashRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom"
import Home from "../views/Home";
import About from "../views/About";
import List from "../views/List";
import NotFound from "../views/NotFound"

import React, { Component } from 'react'

export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            routerList: [
                { id: 1, path: "/", com: Home, exact },
                { id: 2, path: "/about", com: About },
                { id: 3, path: "/list", com: List }
            ]
        }
    }
    render() {
        return (
            <Router>
                <div className="main">
                    <Switch>
                        {this.state.routerList.map(item => {
                            return <Route path={item.path} component={item.com} exact={item.exact} key={item.id}></Route>
                        })}
                        <Route path="/404" component={NotFound}></Route>
                        <Redirect path="*" to="/404"></Redirect>
                    </Switch>
                </div>
            </Router>
        )
    }
}
