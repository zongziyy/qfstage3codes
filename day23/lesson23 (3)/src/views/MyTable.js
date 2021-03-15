import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button } from 'antd';
import  {useSelector,useDispatch} from "react-redux"
import  {asyncAddUser,asyncDeleteUser, asyncInitUserList} from "../action/userAction";







export default function MyTable() {

    const [columns, setcolumns] = useState([{
        title: '编号',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '密码',
        dataIndex: 'userpwd',
        key: 'userpwd',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button onClick={() => {
                    del(record.id);
                }}>删除</Button>
            </Space>
        ),
    },])

    const userList = useSelector(state => state.userInfo.list);
    const dispatch = useDispatch();
    let del = (id) => {
       dispatch(asyncDeleteUser(id));
    }
    useEffect(() => {
        //页面请求
        if(!userList.length){
            dispatch(asyncInitUserList())
        }      
    }, [])

    return (
        <div>
            <Table columns={columns} dataSource={userList} />
        </div>
    )
}





