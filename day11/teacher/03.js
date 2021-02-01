let http = require("http");//http 数据请求

//http可以发送和接收数据

http.get("http://localhost:1234/2005/php/goodslist.php?key=&shownum=10&skipnum=0",(res)=>{
    let result = "";
    res.on("data",(chunk)=>{
        result += chunk;
    })
    res.on("end",()=>{
        console.log(result);
    })
})

