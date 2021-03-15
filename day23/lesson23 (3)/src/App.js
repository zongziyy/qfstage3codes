import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import  {useSelector} from "react-redux"
import Home from "./views/Home";
import Menu1 from "./views/Menu1";
import Menu2 from "./views/Menu2";
import Menu3 from  "./views/Menu3";
import Menu4 from  "./views/Menu4";
import Menu5 from "./views/Menu5";
import Menu6 from  "./views/Menu6";
import Menu7 from "./views/Menu7";
import UseContext from "./views/UseContext";
import UseReducer from "./views/UseReducer";
import UseCallBack from "./views/useCallback";
import UseRef from "./views/UseRef";
import MyForm from "./views/MyForm";
import MyTable from "./views/MyTable";
import MyLayout from  "./views/MyLaout";
import Upload  from  "./views/Upload";
import Echarts from  "./views/Echarts";

export default function App() {
    const flag = useSelector(state => state.flagInfo.flag)

    return (
        <div>
            {flag?<div>
                     <a href="#/">首页</a>|
                     <a href="#/menu1">菜单一</a>|
                     <a href="#/menu2">菜单二</a>|
                     <a href="#/menu3">菜单三</a>|
                     <a href="#/menu4">菜单四</a>|
                     <a href="#/menu5">中间件</a>|
                     <a href="#/menu6">菜单三改成中间件</a>|
                     <a href="#/menu7">菜单管理</a>|
                     <a href="#/menu8">useContext</a>|
                     <a href="#/menu9">useReducer</a>|
                     <a href="#/menu10">useCallBack</a>|
                     <a href="#/menu11">useRef</a>|
                     <a href="#/form">Form</a>|
                     <a href="#/table">Table</a>|
                     <a href="#/layout">Layout</a>|
                     <a href="#/upload">Upload</a>|
                     <a href="#/echarts">图表</a>
          </div>:""}
         
               <Router>
                    <Switch>
                         <Route path="/" component={Home} exact></Route>
                         <Route path="/menu1" component={Menu1}></Route>
                         <Route path="/menu2" component={Menu2}></Route>
                        <Route path="/menu3" component={Menu3}></Route>
                         <Route path="/menu4" component={Menu4}></Route>
                        <Route path="/menu5" component={Menu5}></Route>
                         <Route path="/menu6" component={Menu6}></Route>
                         <Route path="/menu7" component={Menu7}></Route>
                         <Route path="/menu8" component={UseContext}></Route>
                         <Route path="/menu9" component={UseReducer}></Route>
                         <Route path="/menu10" component={UseCallBack}></Route>
                         <Route path="/menu11" component={UseRef}></Route>
                         <Route path="/form" component={MyForm}></Route>
                         <Route path="/table" component={MyTable}></Route>
                         <Route path="/layout" component={MyLayout}></Route>
                         <Route path="/upload" component={Upload}></Route>
                         <Route path="/echarts" component={Echarts}></Route>
                     </Switch>
                 </Router>
        </div>
    )
}


// import React, { Component } from 'react'
// import { HashRouter as Router, Route, Switch } from "react-router-dom"
// import Home from "./views/Home";
// import Menu1 from "./views/Menu1";
// import Menu2 from "./views/Menu2";
// import Menu3 from  "./views/Menu3";
// import Menu4 from  "./views/Menu4";
// import Menu5 from "./views/Menu5";
// import Menu6 from  "./views/Menu6";
// import  {connect} from "react-redux"

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.flag? <div>
//                     <a href="#/">首页</a>|
//                     <a href="#/menu1">菜单一</a>|
//                     <a href="#/menu2">菜单二</a>|
//                     <a href="#/menu3">菜单三</a>|
//                     <a href="#/menu4">菜单四</a>|
//                     <a href="#/menu5">中间件</a>|
//                     <a href="#/menu6">菜单三改成中间件</a>|
//                 </div>:""}
               
//                 <Router>
//                     <Switch>
//                         <Route path="/" component={Home} exact></Route>
//                         <Route path="/menu1" component={Menu1}></Route>
//                         <Route path="/menu2" component={Menu2}></Route>
//                         <Route path="/menu3" component={Menu3}></Route>
//                         <Route path="/menu4" component={Menu4}></Route>
//                         <Route path="/menu5" component={Menu5}></Route>
//                         <Route path="/menu6" component={Menu6}></Route>
//                     </Switch>
//                 </Router>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//         flag:state.flagInfo.flag
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)