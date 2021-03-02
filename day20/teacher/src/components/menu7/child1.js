import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class child1 extends Component {
    static propTypes = {
        num: PropTypes.number,
    }
    constructor(props){
        super(props);
        
    }

    render() {
        console.log(this.props);
        return (
            <div>
                来自父元素的数据为{this.props.num}
                {this.props.children}
                <input ref="username"/>
                <button onClick={()=>{
                    this.props.fn(this.refs.username.value);
                }}>点击把数据给父元素</button>
            </div>
        )
    }
}
