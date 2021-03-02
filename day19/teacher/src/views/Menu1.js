import React, { Component } from 'react'

export default class Menu1 extends Component {
    constructor(props){
        super(props);
        this.state= {
            num:10
        }
        this.add8 = this.add7.bind(this);
    }
 
    add=()=>{
        alert("加法");
    }
    add2=(n)=>{
        alert(n);
    }

    add3=(e)=>{
       e.target.style.color="red";
    }

    add4=(n,e)=>{
        alert(n);
        e.target.style.color="red";
    }

    add5(n){
        this.setState({
            num:this.state.num+n
        })
    }
    add6(){
        this.setState({
            num:this.state.num+1
        })
    }
    add7(){
        this.setState({
            num:this.state.num+1
        })
    }

    render() {
        return (
            <div>
               <button onClick={()=>{
                   this.add()
               }}>事件一</button>
              <button onClick={this.add}>事件二</button>

              <button onClick={()=>{
                   this.add2(10)
               }}>事件三</button>

            <button onClick={this.add2.bind(this,10)}>事件四</button>


            <button onClick={(e)=>{
                   this.add3(e)
               }}>事件五</button>
            <button onClick={this.add4.bind(this,10)}>事件六</button>
            {this.state.num}

            <button onClick={()=>{
                   this.add5(10);
               }}>事件七</button>

                 <button onClick={()=>{
                   this.add5(10);
               }}>事件八</button>

            <button onClick={this.add6.bind(this)}>事件九</button>

            <button onClick={this.add8}>事件10</button>
            </div>
        )
    }
}

