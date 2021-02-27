import React, { Component } from 'react'
import Header from './componets/Header'
import Main from './componets/Main'
import Footer from './componets/Footer'

export default class App extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </>
        )
    }
}
