import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="content">
                内容{this.props.num}正在学习{this.props.title}
                <this.props.com></this.props.com>
            </div>
        )
    }
}
