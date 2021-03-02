import React, { Component } from 'react'
import numContext from '../../context'

export default class Child2 extends Component {
    constructor(props) {
        super(props)
    }
    static contextType = numContext;
    render() {
        return (
            <div>
                子组件二{this.context}
            </div>
        )
    }
}
