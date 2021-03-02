import React, { Component } from 'react'
import Child1 from  "../components/menu8/child1"
import  NContext from  "../context";

export default class Meun8 extends Component {
    constructor(props){
        super(props);
        this.state ={
            num:100
        }
    }

    render() {
        return (
            <div>
                <Child1 num={this.state.num}></Child1>
                <NContext.Provider value={{
                    n:8888
                }}>
                    <Child1></Child1>
                </NContext.Provider>
            </div>
        )
    }
}
