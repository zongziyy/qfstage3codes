import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./views/Home";
import Menu1 from "./views/Menu1";
import Menu2 from "./views/Menu2";
import Menu3 from  "./views/Menu3";
import Menu4 from  "./views/Menu4";
import Menu5 from "./views/Menu5";
import Menu6 from  "./views/Menu6";
import  {connect} from "react-redux"

class App extends Component {
    render() {
        return (
            <div>
                {this.props.flag? <div>
                    <a href="#/">首页</a>|
                    <a href="#/menu1">菜单一</a>|
                    <a href="#/menu2">菜单二</a>|
                    <a href="#/menu3">菜单三</a>|
                    <a href="#/menu4">菜单四</a>|
                    <a href="#/menu5">中间件</a>|
                    <a href="#/menu6">菜单三改成中间件</a>|
                </div>:""}
               
                <Router>
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/menu1" component={Menu1}></Route>
                        <Route path="/menu2" component={Menu2}></Route>
                        <Route path="/menu3" component={Menu3}></Route>
                        <Route path="/menu4" component={Menu4}></Route>
                        <Route path="/menu5" component={Menu5}></Route>
                        <Route path="/menu6" component={Menu6}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
        flag:state.flagInfo.flag
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App)