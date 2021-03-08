import React, { Component } from 'react'
import Mynavs from '../hoc/Mynavs'
import Myrouters from '../hoc/Myrouters'
import { connect } from 'react-redux'

class Menu extends Component {
    constructor(props) {
        super(props);
        let userinfo = localStorage.getItem('userinfo');
        userinfo = JSON.parse(userinfo)
       
        if (userinfo) {
            this.state = {
                nav: Mynavs(userinfo),
                Routers: Myrouters(userinfo)
            }
        } else {
            this.props.history.push('/')
        }

    }
    render() {
        return (
            <div className='menu'>
                {this.props.menuFlag ? <this.state.nav></this.state.nav> : ""}
                {/* <this.state.nav></this.state.nav> */}
                <this.state.Routers></this.state.Routers>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuFlag: state.menuFlag.flag
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
