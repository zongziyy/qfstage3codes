import react, { Fragment }  from  "react";
import reactDom from "react-dom";
import  App  from "./App";
import "./css/index.css";

//函数式组件 16.8 之前 叫纯组件 没有生命周期   16.8以后 hooks组件
//类组件  es6 class  es5的 createClass
let  list = [1,2,3,4,5,6,7,8,9]
//第一次找最后一位 C  在前面随机找一个数 和c交换
//第二次找最后第二位  前面随机找一个数   和  倒数第二位交换
for(let i = list.length-1;i>=0;i--){//i:8
    let  item  = list[i];//最后一个数 9 
    let  randIndex = Math.round(Math.random()*(i-1));//0-7
    let  num = list[randIndex];//找到随机下标对应的数
    list[i] = num;
    list[randIndex]=item;
}
console.log(list);




// let  arr = list.sort(()=>{
//     return  Math.random()-0.5;
// })
// console.log(arr);

//  let  arr = [];
//  let  len = list.length;

//  for(let i=0;i<len;i++){
//      let randIndex =Math.round( Math.random()*(list.length-1));
//      let item = list[randIndex];
//      arr.push(item);
//      list.splice(randIndex,1);
//  }
// console.log(arr);

 
 


reactDom.render(<App/>,document.getElementById("root"))