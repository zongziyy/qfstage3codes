import React, { Component } from 'react'
export default (userinfo) => {

    class mynavs extends Component {
        constructor(props) {
            super(props);
            this.state = {
                menuList: [
                    // { path: '/menu/', msg: "新增用户" },
                    // { path: '/menu/addmenu', msg: "新增菜单" },
                    // { path: '/menu/addusermenu', msg: "菜单分配" }
                ]
            }
        }

        async componentDidMount() {
            if (userinfo.usertype == 1) {
                this.setState({
                    menuList: [
                        { path: '/menu/', msg: "新增用户" },
                        { path: '/menu/addmenu', msg: "新增菜单" },
                        { path: '/menu/addusermenu', msg: "菜单分配" }
                    ]
                })
            } else {
                console.log('666')
            }
        }
        render() {
            return (
                <div className="nav">
                    {this.state.menuList.map((item, index) => {
                        return <a href={'#' + item.path} key={index}>{item.msg}</a>
                    })}
                </div>
            )
        }
    }

    return mynavs
}
