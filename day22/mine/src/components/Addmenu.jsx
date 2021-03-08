import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initMenuList, addMenu } from '../actions/menuactions'
import menuModel from '../model/menuModel'

class Addmenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuName: '',
            path: '',
            component: ''
        }
    }

    async componentDidMount() {
        if (!this.props.menuList.length) {
            let { data: menuList } = await menuModel.query();
            this.props.initMenuList(menuList)
        }
    }
    addMenu = async () => {
        let { menuName, path, component } = this.state;
        if (!(menuName && path && component)) {
            alert('请输入完整内容')
            return false;
        }
        let { data } = await menuModel.query({ menuName });
        if (data.length) {
            alert('该用户名已存在');
        } else {
            menuModel.add({ menuName, path, component }).then((res) => {
                this.props.addMenu(res.data)
                alert('新增成功')
            }, () => {
                alert('新增失败')
            })


        }
    }
    render() {
        return (
            <div className='addmenu'>
                <p>新增菜单</p>
                <div>菜单名:<input value={this.state.menuName} onChange={(e) => {
                    this.setState({
                        menuName: e.target.value
                    })
                }} /></div>
                <div>路&emsp;径:<input value={this.state.path} onChange={(e) => {
                    this.setState({
                        path: e.target.value
                    })
                }} /></div>
                <div>组&emsp;件:<input value={this.state.component} onChange={(e) => {
                    this.setState({
                        component: e.target.value
                    })
                }} /></div>
                <button onClick={this.addMenu}>新增</button>
                <div className="userList">
                    <div className="tr cl">
                        <div className="td">
                            编号
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
                                {item.id}
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
    menuList: state.menuInfo.list
})

const mapDispatchToProps = {
    initMenuList, addMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Addmenu)


