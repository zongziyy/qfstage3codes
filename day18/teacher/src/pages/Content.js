import React, { Component } from 'react'
import  "../css/content.css";


//数据的声明和显示
export default class Content extends Component {

    constructor(props){//属性/数据
        super(props);//加强this指向   后面的方法中 都可以使用this调用数据
        
        this.state = {
            num:10,
            list:[1,2,3,4],
            com:this.props.com       
        }
    }
    //方法
    add = ()=>{
        // this.state.num++;
        this.setState({//当setState触发的时候   render会重新渲染
            num:this.state.num+1
        })
    }

    render() {
        
        let result  = "偶数";
        if(this.state.num%2!=0){
            result = "奇数";
        }
        let  listResult = this.state.list.map((item,index)=>{
            return  <button key={index}>{item}</button>
        })
        let  com  = <this.props.com></this.props.com>

        return (
            <div className="content">
                我是主体内容{this.state.num}
                <button onClick={()=>{
                    this.add()
                }}>+</button>

                <div>
                    {this.state.num%2==0?'偶数':'奇数'}
                    {
                        result
                    }
                </div>

                {this.state.list}

                {this.state.list.map((item,index)=>{

                    return  <button key={index}>{item}</button>;
                })}

                {listResult}
                {com}
        
            </div>
        )

    }
}
