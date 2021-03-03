import React, { Component } from 'react'
import userModel from "../model/userModel";
import menuModel from "../model/menuModel";
import userMenuModel from "../model/userMenuModel"
import "../css/menu.css";

export default class AddUserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: "",
            usermenuList:[],//下拉框选中用户的菜单
            userList: [],//用户的列表
            menuList: []//所有菜单的列表
        }
    }
    async componentDidMount() {
        let { data: userList } = await userModel.query({ usertype: 2 });
        let { data: menuList } = await menuModel.query();
        this.setState({
            userList,
            menuList: menuList.map(item => { item.ischecked = false; return item })
            
        })
        // 给返回的数据 每一个对象都新增一个ischecked属性
    }

    changeUser =async (userid) => {//下拉框的改变事件

        this.setState({//每次选择的时候 先清空选中状态
            menuList:this.state.menuList.map(item=>{
                item.ischecked = false;
                return item;
            })
        })

        //根据用户编号 获取该用户的权限
        let {data:usermenulist}= await  userMenuModel.query({userid});
        //要对比两个集合  当usermenulist中的数据 在menuList中有的时候  menuList的那条数据就选中
        this.setState({
            menuList:this.state.menuList.map(item=>{
                //some一个满足结果就为true
                if(usermenulist.some(usermenu=>usermenu.menuid==item.id)){
                        item.ischecked = true;
                }
                return item;
            }),
            usermenuList:usermenulist,//用户的菜单
        })





        this.setState({
            userid
        })
    

    }

    add = async () => {//新增用户权限  获取下拉框选中的用户  和 列表中勾选了的权限
        let { userid } = this.state;
        let  menuList = this.state.menuList.filter(item=>item.ischecked);
        // console.log(userid);
        // console.log(menuList)


        //判断用户的权限  如果有 要先删除  删除只能根据id进行删除
        for(let i=0;i<this.state.usermenuList.length;i++){
            let id = this.state.usermenuList[i].id;//要删除的id
            await userMenuModel.del(id);
        }

        //新增
        for(let i=0;i<menuList.length;i++){
            let  menu =menuList[i];
             await    userMenuModel.add({
                userid,
                menuid:menu.id,
                msg:menu.msg,
                path:menu.path,
                component:menu.component,
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
                    {this.state.userList.map((user, index) => {
                        return <option value={user.id} key={index}>{user.username}</option>
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
                                <input type="checkbox" checked={item.ischecked} onChange={()=>{
                                    this.setState({
                                        menuList:this.state.menuList.map(menu=>{
                                            if(menu.id==item.id){
                                                menu.ischecked = !menu.ischecked;
                                            }
                                            return menu;
                                        })
                                    })

                                }}/>
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
