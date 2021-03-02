import react, { Fragment }  from  "react";
import reactDom from "react-dom";
import  App  from "./App";
import "./css/index.css";

//函数式组件 16.8 之前 叫纯组件 没有生命周期   16.8以后 hooks组件
//类组件  es6 class  es5的 createClass
reactDom.render(<App/>,document.getElementById("root"))