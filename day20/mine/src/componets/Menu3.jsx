import React, { Component } from 'react';
import Child1 from './Menu3/Child1';
import numContext from '../context'

export default class Menu3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ""
        }
    }


    render() {
        return (
            <>
                <input type="text" value={this.state.num} onChange={(e) => {
                    this.setState({
                        num: e.target.value
                    })
                }} />
                <numContext.Provider value={this.state.num}>
                    <Child1></Child1>
                </numContext.Provider>
            </>
        )
    }
}
