import React, { Component } from 'react'

export default class Menu6 extends Component {
    constructor(props){
        //接收父组件传来的数据
        //声明当前组件 自己的数据
        super(props);
        this.state={
            num:10

        }
        console.log("初始化1")
    }

    componentDidMount(){//页面加载完成以后的数据请求
        console.log("页面结构加载完成");
    }

    componentDidUpdate(){
        console.log("更新完毕")
    }
    componentWillUnmount(){
        console.log("销毁");
    }
    shouldComponentUpdate(nextProps,nextState){
        //console.log(nextState);
        if(nextState.num%2==0){
            return true;
        }
        return false;
        

    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevState.num);
        return  null;
    }
    render() {
        console.log("开始渲染页面2")
        

        return (
            <div>
                生命周期{this.state.num}<button onClick={()=>{
                    this.setState({
                        num:this.state.num+1
                    })
                }}>+</button>
            </div>
        )
    }

   
}
