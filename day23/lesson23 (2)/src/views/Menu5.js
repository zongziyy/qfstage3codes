import React from 'react'
import  {useSelector,useDispatch} from "react-redux"
import  {asyncAdd} from "../action/numAction"

function  fn(){
    let num =10;
    return  ()=>{
        num++;
        return  num;
    }
}

let  result = fn();
console.log(result());
console.log(result());

console.log(fn()());
console.log(fn()());

console.log(result());

export default function Menu5() {
    const num = useSelector(state => state.numInfo.num)
    let  dispatch = useDispatch();
    return (
                   <div>
                中间件{num}
                <button onClick={()=>{
                      dispatch(asyncAdd(5));
                    //   useDispatch()(asyncAdd(6))
                    //   store.dispatch()
                    // this.props.asyncAdd(5)
                    // setTimeout(()=>{
                    //     this.props.add(5);
                    // },2000)
                }}>+</button>
            </div>
    )
}



// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {add,asyncAdd} from "../action/numAction"

// export class Menu5 extends Component {
//     render() {
//         return (
//             <div>
//                 中间件{this.props.num}
//                 <button onClick={()=>{

//                     this.props.asyncAdd(5)
//                     // setTimeout(()=>{
//                     //     this.props.add(5);
//                     // },2000)
//                 }}>+</button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     num:state.numInfo.num
    
// })

// const mapDispatchToProps = {
//     add,
//     asyncAdd

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Menu5)
