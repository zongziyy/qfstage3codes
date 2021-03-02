import React, { Component } from 'react'
import Menu2 from './Menu2';

export default class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='main'>
                <this.props.com></this.props.com>
            </div>
        )
    }
}

