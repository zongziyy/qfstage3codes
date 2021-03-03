import React, { Component } from 'react'
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import A1 from '../components/A1'
import A2 from '../components/A2'
import A3 from '../components/A3'
import Adduser from '../components/Adduser'
import NotFound from './NotFound'
import Mynavs from '../hoc/Mynavs'
import Myrouters from '../hoc/Myrouters'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        let userinfo = localStorage.getItem('userinfo');
        userinfo = JSON.parse(userinfo)
        if (userinfo) {
            this.state = {
                nav: Mynavs(userinfo),
                Routers: Myrouters(userinfo)
            }
        } else {
            this.props.history.push('/')
        }

    }
    render() {
        return (
            <div className='menu'>
                <this.state.nav></this.state.nav>
                <this.state.Routers></this.state.Routers>
            </div>
        )
    }
}
