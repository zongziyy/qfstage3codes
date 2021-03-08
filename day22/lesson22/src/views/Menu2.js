import React, { Component } from 'react'
import { connect } from 'react-redux'
import  {add} from  "../action/numAction"

export class Menu2 extends Component {
    render() {
        return (
            <div>
                {this.props.num}<button onClick={()=>{
                    this.props.add(1);
                }}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        num:state.numInfo.num
})

const mapDispatchToProps = {
    add
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu2)



// import React, { Component } from 'react'
// import store from  "../store";
// import {add} from "../action/numAction"

// export default class Menu2 extends Component {
//     render() {
//         return (
//             <div>
//                 页面二{store.getState().numInfo.num}
//                 <button onClick={()=>{
//                     store.dispatch(add(10));
//                     this.forceUpdate();
//                 }}>+</button>
//             </div>
//         )
//     }
// }
