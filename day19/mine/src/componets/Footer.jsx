import React, { Component } from 'react'
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
// import $ from 'jquery'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
            MenuList: [
                { id: 1, msg: "表单验证", com: Menu1 },
                { id: 2, msg: "购物车车", com: Menu2 },
                { id: 3, msg: "阿巴阿巴", com: Menu3 },
            ]
        }
    }

    changePage = (com, id) => {
        this.props.fn(com)
        this.setState({
            selectedIndex: id
        })
    }


    render() {
        return (
            <div className="footer">
                {this.state.MenuList.map(item => {
                    return <div className={this.state.selectedIndex == item.id ? "menus active " : "menus"} key={item.id} onClick={(e) => {
                        this.changePage(item.com, item.id)
                    }}>{item.msg}</div>
                })}
            </div>
        )
    }

}



