import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import menuModel from "../model/menuModel";
import { initMenuList, asyncInitMenuList,addMenu,asyncAddMenu} from "../action/menuAction"
import { add } from '../action/numAction';

export default function Menu7() {
    let dispatch = useDispatch();
    const menuList = useSelector(state => state.menuInfo.list);
    const [msg, setMsg] = useState("");
    const [path, setPath] = useState("");

    useEffect(() => {
        if (!menuList.length) {
            // menuModel.query().then(res=>{
            //     dispatch(initMenuList(res.data))
            // })
            dispatch(asyncInitMenuList());
        }
    }, []);
    let add = () => {

        menuModel.add({msg,path}).then((res)=>{
           dispatch( addMenu(res.data));
           
        })
       
    }
    let  asyncAdd =()=>{
        dispatch(asyncAddMenu({msg,path},()=>{
             setMsg("");
             setPath("");
        }));
    }

    return (
        <div>
            <div className="table">
                <div>
                    菜单名称<input value={msg} onChange={(e)=>{
                         setMsg(e.target.value);

                    }}/>
                    菜单路径<input value={path} onChange={(e)=>{
                        setPath(e.target.value);
                    }} />
                    <button onClick={() => {
                        add();
                    }}>新增</button>
                    <button onClick={() => {
                        asyncAdd();
                    }}>异步的新增</button>
                </div>


                <div className="tr">
                    <div className="tr-item">编号</div>
                    <div className="tr-item">菜单名称</div>
                    <div className="tr-item">菜单路径</div>
                    <div className="tr-item">操作</div>
                </div>

                {menuList.map(item => {
                    return (<div className="tr" key={item.id}>
                        <div className="tr-item">{item.id}</div>
                        <div className="tr-item">{item.msg}</div>
                        <div className="tr-item">{item.path}</div>
                        <div className="tr-item">删除</div>
                    </div>)
                })}
            </div>

        </div>
    )
}
