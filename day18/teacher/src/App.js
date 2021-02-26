import React,{Component} from 'react'
import Header  from  "./pages/Header";
import Content from  "./pages/Content";
import Footer  from  "./pages/Footer";
import  Menu1  from  "./pages/Menu1"
import  "./css/common.css";

// export default  ()=> {


//     return (
//         <>
//             <Header></Header>
//             <Content com={Menu2}></Content>
//             <Footer></Footer>
//         </>
//     )
// }


export default class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            com:Menu1
        }
    }
    changeMenu=(com)=>{//更新菜单的方法
        console.log(com);
        this.setState({
            com:com
        })
    }
    render() {
        return (
            <>
                <Header></Header>
                <Content com={this.state.com}></Content>
                <Footer fn={this.changeMenu}></Footer>
            </>

        )
    }
}
