import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./views/Home";
import Menu1 from "./views/Menu1";
import Menu2 from "./views/Menu2";

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#/">首页</a>|
                    <a href="#/menu1">菜单一</a>|
                    <a href="#/menu2">菜单二</a>
                </div>
                <Router>
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/menu1" component={Menu1}></Route>
                        <Route path="/menu2" component={Menu2}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
