import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initUserList } from '../actions/useractions'
import userModel from '../model/userModel'
import { initMenuList } from '../actions/menuactions'
import menuModel from '../model/menuModel'


class SetMenus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectUser: ''
        }
    }

    async componentDidMount() {
        if (!this.props.userList.length) {
            let { data: userList } = await userModel.query({ usertype: 2 });
            this.props.initUserList(userList)
        }
        if (!this.props.menuList.length) {
            let { data: menuList } = await menuModel.query();
            this.props.initMenuList(menuList)
        }
    }

    render() {
        return (
            <div className='setMenus'>
                <span>选择用户:</span><select name="" id="" onChange={
                    (e) => {
                        this.setState({
                            selectUser: e.target.value
                        })
                    }
                }>
                    <option value=''>请选择用户</option>
                    {this.props.userList.map((item, index) => {
                        return <option value={item.id} key={index}>{item.username}</option>
                    })}
                </select>
                <div className="userList">
                    <div className="tr cl">
                        <div className="td">
                            <input type='checkbox' />全选
                        </div>
                        <div className="td">
                            菜单名
                        </div>
                        <div className="td">
                            路径
                        </div>
                        <div className="td">
                            组件
                        </div>
                    </div>
                    {this.props.menuList.map(item => {
                        return <div className="tr cl" key={item.id}>
                            <div className="td">
                                <input type='checkbox' />
                            </div>
                            <div className="td">
                                {item.menuName}
                            </div>
                            <div className="td">
                                {item.path}
                            </div>
                            <div className="td">
                                {item.component}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userList: state.userInfo.list,
    menuList: state.menuInfo.list
})

const mapDispatchToProps = {
    initUserList, initMenuList
}

export default connect(mapStateToProps, mapDispatchToProps)(SetMenus)
