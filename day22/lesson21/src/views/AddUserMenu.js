import React, { Component } from 'react'
import userModel from "../model/userModel";
import menuModel from "../model/menuModel";
import usermenuModel from "../model/userMenuModel"
import store from "../store";
import "../css/menu.css";

export default class AddUserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",//用户编号
            userList: [],
            menuList: [],//所有的菜单
            usermenuList: [],//用户对应的菜单
        }
        console.log(store.getState().userInfo.list);
    }
    async componentDidMount() {
        if (store.getState().userInfo.list) {//有缓存的数据直接用
            this.setState({
                userList: store.getState().userInfo.list
            })

        } else {
            let { data: userList } = await userModel.query({ usertype: 2 });
            this.setState({
                userList
            })
        }
        let { data: menuList } = await menuModel.query();
        this.setState({
            menuList: menuList.map(item => {
                item.ischecked = false;
                return item
            })
        })
    }
    changeUser = async (userId) => {
        if (userId) {
            //改变用户以后 先清空
            this.setState({
                menuList: this.state.menuList.map(item => { item.ischecked = false; return item })
            })

            //根据用户编号 查询该用户有的权限

            let { data: userMenuList } = await usermenuModel.query({ userid: userId })
            console.log(userMenuList);
            //做比较  比较两个集合中 是否有相同的  相同的ischecked改成true

            this.setState({
                menuList: this.state.menuList.map(item => {
                    if (userMenuList.some(usermenu => usermenu.menuid == item.id)) {
                        item.ischecked = true;
                    }
                    return item;
                }),
                usermenuList: userMenuList,
            })









            this.setState({
                userId
            })
        } else {
            alert("没有选择用户");
        }

    }

    add = async () => {
        //用户编号   和 选择的数据
        let { userId } = this.state;
        let menuList = this.state.menuList.filter(item => item.ischecked);
        // console.log(menuList);

        //先删除 该用户的所有权限  在新增
        let { data: usermenuList } = await usermenuModel.query({ userid: userId })

        for (let i = 0; i < usermenuList.length; i++) {
            let usermenu = usermenuList[i];//用户每个菜单
            let id = usermenu.id;
            await usermenuModel.del(id);
        }


        for (let i = 0; i < menuList.length; i++) {
            let menu = menuList[i];//找到每一个菜单
            await usermenuModel.add({
                userid: userId,
                menuid: menu.id,
                path: menu.path,
                msg: menu.msg,
                component: menu.component
            })
        }



    }

    render() {
        return (
            <div>
                <select onChange={(e) => {
                    this.changeUser(e.target.value);
                }}>
                    <option value="">请选择用户</option>
                    {this.state.userList.map(item => {
                        return <option value={item.id} key={item.id}>{item.username}</option>
                    })}
                </select>

                <div className="menulist">
                    <div className="tr">
                        <div className="tr-item">
                            <input type="checkbox" />全选
                       </div>
                        <div className="tr-item">
                            菜单名称
                       </div>
                        <div className="tr-item">
                            菜单路径
                       </div>
                        <div className="tr-item">
                            组件
                       </div>
                    </div>

                    {this.state.menuList.map(item => {

                        return (<div className="tr" key={item.id}>
                            <div className="tr-item">
                                <input type="checkbox" checked={item.ischecked} onChange={() => {
                                    this.setState({
                                        menuList: this.state.menuList.map(menu => {
                                            if (menu.id == item.id) {
                                                menu.ischecked = !menu.ischecked;
                                            }
                                            return menu;
                                        })
                                    })

                                }} />
                            </div>
                            <div className="tr-item">
                                {item.msg}
                            </div>
                            <div className="tr-item">
                                {item.path}
                            </div>
                            <div className="tr-item">
                                {item.component}
                            </div>
                        </div>)
                    })}


                </div>

                <button onClick={() => {
                    this.add();
                }}>确定授权</button>

            </div>
        )
    }
}
