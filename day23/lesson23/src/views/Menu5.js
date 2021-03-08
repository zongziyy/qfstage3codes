import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add,asyncAdd} from "../action/numAction"

export class Menu5 extends Component {
    render() {
        return (
            <div>
                中间件{this.props.num}
                <button onClick={()=>{

                    this.props.asyncAdd(5)
                    // setTimeout(()=>{
                    //     this.props.add(5);
                    // },2000)
                }}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    num:state.numInfo.num
    
})

const mapDispatchToProps = {
    add,
    asyncAdd

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu5)
