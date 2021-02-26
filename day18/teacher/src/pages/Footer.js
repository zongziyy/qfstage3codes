import React, { Component } from 'react'
import  Style  from  "../style"

import  Menu1  from  "./Menu1"
import  Menu2  from  "./Menu2"
import  Menu3  from  "./Menu3"
import  "../css/footer.css";


export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            index:1,
            menuList:[{id:1,msg:"菜单一",com:Menu1},{id:2,msg:"菜单二",com:Menu2},{id:3,msg:"菜单三",com:Menu3}]
        }
    }    
    change=(item)=>{
        this.setState({//更新
            index:item.id
        });
        this.props.fn(item.com);

    }

    render() {
        return (
            <div style={Style.footerStyle} className="menu">
                    {this.state.menuList.map(item=>{
                        return <div className={this.state.index==item.id?'item active':'item'} key={item.id} onClick={
                            ()=>{
                                this.change(item);
                            }
                        }>{item.msg}</div>
                    })}

            </div>
        )
    }
}
