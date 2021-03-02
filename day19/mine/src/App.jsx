import React, { Component } from 'react'
import Header from './componets/Header'
import Main from './componets/Main'
import Footer from './componets/Footer'
import Menu1 from './componets/Menu1'
import { fn } from 'jquery'

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            com: Menu1,
            fn: null
        }
    }

    changeMenu = (com) => {
        this.setState({
            com
        })
    }
    getCom = (fn) => {
        this.setState({
            fn: fn
        })
    }
    render() {
        return (
            <>
                <Header></Header>
                <Main com={this.state.com} getCom={this.getCom}></Main>
                <Footer fn={this.changeMenu} getCom={this.getCom}></Footer>
            </>
        )
    }
}
