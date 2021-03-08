import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addNum} from "../action/numAction"
 class Page2 extends Component {
    render() {
        return (
            <div>
            第二个页面 全局的数据为{this.props.num}
                <button onClick={()=>{
                    this.props.addNum(2);
                 }}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    num:state.numInfo.num
})

const mapDispatchToProps = {
    addNum
}

export default connect(mapStateToProps, mapDispatchToProps)(Page2)


// import React, { Component } from 'react'
// import store  from  "../store";
// import  {addNum} from "../action/numAction"
// export default class Page2 extends Component {
//     render() {
//         return (
//             <div>
//                 第二个页面 全局的数据为{store.getState().numInfo.num}
//                 <button onClick={()=>{
//                     store.dispatch(addNum(5))
//                     this.forceUpdate();
//                 }}>+</button>
//             </div>
//         )
//     }
// }
