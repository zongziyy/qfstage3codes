import React, { Component } from 'react'
import  Header  from  "./views/Header";
import  Content from  "./views/Content";
import  Footer  from  "./views/Footer";
import  Menu1 from  "./views/Menu1";


export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            num:10,
            com:Menu1,
            fn:null,
        }
    }
    add=(n)=>{
        this.setState({
            num:this.state.num+n
        })
    }
    getcom = (com)=>{
       this.setState({
           com
       })
    }
    getid = (fn)=>{//这个fn是是子元素的
        this.setState({
            fn:fn
        })

    }


    render() {
        return (
            <>
                <Header fn={this.add}></Header>
                <Content  num={this.state.num} title="react" com={this.state.com} fn={this.state.fn}></Content>
                <Footer getcom={this.getcom} fn={this.getid}></Footer> 
            </>
        )
    }
}
