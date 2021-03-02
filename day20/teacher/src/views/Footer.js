import React, { Component } from 'react'
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import Menu6 from "./Menu6";
import Menu7 from "./Menu7";
import Menu8  from  "./Menu8";
import Menu9 from "./Menu9";



export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {//等价于vue中data
            activeIndex: 1,
            meunList: [{ id: 1, msg: "事件", com: Menu1 }, { id: 2, msg: "受控和非受控", com: Menu2 }, { id: 3, msg: "表单验证", com: Menu3 }, { id: 4, msg: "购物车", com: Menu4 }, { id: 5, msg: "数据请求", com: Menu5 },{ id: 6, msg: "生命周期", com: Menu6 },{ id: 7, msg: "组件通信一", com: Menu7 },{ id: 8, msg: "组件通信二", com: Menu8},{ id: 9, msg: "组件通信三", com: Menu9} ]
        }

    }
    changeIndex = (index, com) => {
        this.setState({//改变了 id以后  在改变com
            activeIndex: index
        })
        //把菜单的com 给content
        this.props.getcom(com);
    }
    getId=(id)=>{
        this.setState({
            activeIndex:id
        })
        this.props.getcom(this.state.meunList.filter(item=>item.id==id)[0].com)
    }
    componentDidMount(){
        this.props.fn(this.getId);//页面结构 加载完成以后 把函数给父元素
    }



    render() {


        return (
            <div className="footer">
                {this.state.meunList.map(item => {
                    return <div key={item.id} className={item.id == this.state.activeIndex ? 'item active' : 'item'} onClick={() => {
                        this.changeIndex(item.id, item.com);
                    }}>{item.msg}</div>
                })}

            </div>
        )
    }
}
