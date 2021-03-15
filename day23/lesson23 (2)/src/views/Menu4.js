import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"
import {changeFlag} from "../action/flagAction"

export default function Menu4() {
    let  dispatch = useDispatch();

    useEffect(() => {//页面加载的生命周期
        dispatch(changeFlag(false));
    }, []);

    useEffect(() => { //页面销毁的生命周期
        return () => {
            dispatch(changeFlag(true));
        }
    },[])


    return (
        <div>
            <div>
                测试flag
             </div>
        </div>
    )
}



// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import  {changeFlag} from "../action/flagAction"
// export class Menu4 extends Component {

//     componentDidMount(){//组件加载完成的生命周期
//         this.props.changeFlag(false);
//     }
//     componentWillUnmount(){//组件销毁
//         this.props.changeFlag(true);
//     }
//     render() {
//         return (
//             <div>
//                 测试flag
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({


// })

// const mapDispatchToProps = {
//     changeFlag
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Menu4)

