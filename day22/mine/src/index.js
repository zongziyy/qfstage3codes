import React from "react"; //基本的语法支持
import ReactDom from "react-dom"; //支持jsx语法  
import App from "./App.jsx";
import './css/reset.css'
import store from './store'
import { Provider } from 'react-redux'

//render等价于vue中template  根节点只有一个

ReactDom.render(<Provider store={store}> <App> </App></Provider>, document.getElementById('root'));