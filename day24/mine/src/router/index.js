import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from '../util/loadable';
const Page1 = loadable(() => import('../views/Page1'))
const Page2 = loadable(() => import('../views/Page2'))

export default class Index extends Component {
    render() {
        return (
            <div>
                <a href="/#/page1">页面一</a>丨
                <a href="/#/page2">页面二</a>
                <Router>
                    <Switch>
                        <Route path='/' component={Page1} exact></Route>
                        <Route path='/page1' component={Page1}></Route>
                        <Route path='/page2' component={Page2}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

