import React, { Component } from 'react'
import { connect } from 'react-redux'
import {reduce} from "../action/numAction"

export class Menu1 extends Component {
    render() {
        return (
            <div>
                全局的数据为{this.props.num}
                <button onClick={()=>{
                    this.props.reduce(3)
                }}>-</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    num:state.numInfo.num
    
})

const mapDispatchToProps = {
    reduce
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu1)


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
