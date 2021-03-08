import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import loadable from '../utils/loadable';
// import Home from '../view/Home'
// import About from '../view/About'
// import List from '../view/List'
// import NotFound from '../view/NotFound'

const Home = loadable(() => import('../view/Home'))
const Menu = loadable(() => import('../view/Menu'))
const NotFound = loadable(() => import('../view/NotFound'))

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerList: [
                {
                    id: 1,
                    path: "/",
                    com: Home,
                    exact: true
                },
                {
                    id: 2,
                    path: '/menu',
                    com: Menu
                }
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
                        <Route path='/404' component={NotFound} ></Route>
                        <Redirect path='*' to='/404'></Redirect>
                    </Switch>
                </div>
            </Router>
        )
    }
}
