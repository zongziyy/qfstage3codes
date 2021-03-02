import React, { Component } from 'react'
import NContext  from  "../../context";

export default class child2 extends Component {

    // 指定 contextType 读取当前的 NContext。
  // React 会往上找到最近的 theme Provider，然后使用它的值。

  static contextType = NContext;

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
               我是孙元素 {this.props.num}
               我也是孙元素{this.context.n}


            </div>
        )
    }
}
