import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {asyncAdd} from  "../action/numAction"


export default ()=> {
 //组件自己的数据 useState
    const [username, setName] = useState("");
//全局的数据  useSelector
    const num = useSelector(state => state.numInfo.num);
    let dispatch = useDispatch();

    return (
        <div>
            <input value={username} onChange={(e)=>{
                setName(e.target.value)
            }}/>

            <button onClick={()=>{
                alert(username)
            }}>获取值</button>

            全局的数{num}<button onClick={()=>{
                dispatch(asyncAdd(3));
            }}>+</button>

        </div>
    )
}




// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {reduce} from "../action/numAction"

// export class Menu1 extends Component {
//     render() {
//         return (
//             <div>
//                 全局的数据为{this.props.num}
//                 <button onClick={()=>{
//                     this.props.reduce(3)
//                 }}>-</button>
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     num:state.numInfo.num
    
// })

// const mapDispatchToProps = {
//     reduce
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Menu1)


// import React, { Component } from 'react'
// import store  from  "../store";
// import  {reduce} from "../action/numAction"

// export default class Menu1 extends Component {
//     render() {
//         return (
//             <div>
//                 页面一全局数据为{store.getState().numInfo.num}
//                 <button onClick={()=>{
//                     store.dispatch(reduce(5));
//                     this.forceUpdate();
//                 }}>-</button>
//             </div>
//         )
//     }
// }
