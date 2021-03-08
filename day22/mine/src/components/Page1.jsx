import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeMenuFlag } from '../actions/menuflagaction'

export class Page1 extends Component {
    constructor(props) {
        super(props)
        this.props.changeMenuFlag(false)
        this.state = {

        }

    }
    componentDidMount() { }
    componentWillUnmount() {
        this.props.changeMenuFlag(true)
    }

    render() {
        return (
            <div>
                页面一
                <button onClick={() => {
                    this.props.history.go(-1)
                }}>返回</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuFlag: state.menuFlag.flag
})

const mapDispatchToProps = {
    changeMenuFlag
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1)
