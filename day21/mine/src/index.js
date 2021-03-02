import React from "react"; //基本的语法支持
import ReactDom from "react-dom"; //支持jsx语法  
import App from "./App.jsx";

//render等价于vue中template  根节点只有一个

ReactDom.render(<App> </App>, document.getElementById('root'));