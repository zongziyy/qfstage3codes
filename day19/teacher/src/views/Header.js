import React, { Component } from 'react'
import  Style from "../style";


export default class Header extends Component {
    constructor(props){
        super(props);
    }
    

    render() {
        return (
            <div style={Style.headerStyle}>
                头部<button onClick={()=>{
                    this.props.fn(5)
                }}>+</button>
            </div>
        )
    }
}
