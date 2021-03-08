import React, { Component } from 'react'

import store  from  "../store";
import {reduceNum} from "../action/numAction"
export default class Page1 extends Component {
    render() {
        return (
            <div>
                第一个页面全局数据为{store.getState().numInfo.num}
                <button onClick={()=>{
                    store.dispatch(reduceNum(3));
                    this.forceUpdate();
                }}>-</button>
            </div>
        )
    }
}
