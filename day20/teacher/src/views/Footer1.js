import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={//等价于vue中data
            num:10,
            list:[1,2,3,4]
        }
    }
    add=()=>{//methods中的add方法
        this.setState({
            num:this.state.num+1
        })
    }


    render() {
        let resultList = this.state.list.map(item=>{
            return  <button key={item}>{item}</button>
        })
        let  resultNum ="偶数";
        if(this.state.num%2!=0){
            resultNum = "奇数";
        }

        return (
            <div className="footer">
                {this.state.num} {this.state.num%2==0?'偶数':'奇数'}
                {resultNum}
                <button onClick={()=>{
                    this.add()
                }}>+</button>
                {this.state.list}
                {this.state.list.map(item=>{
                    return item
                })}
                {this.state.list.map(item=>{
                    return  <button key={item}>{item}</button>
                })}
                {resultList}
            </div>
        )
    }
}
