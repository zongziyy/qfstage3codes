let  http  = require("http");

http.get("http://121.4.96.208:1234/goodslist",(res)=>{

// 有数据传输的时候触发
        let html ="";
    res.on("data",(a)=>{
        html  += a;
    })
    res.on("end",()=>{
        console.log(html);
    })

})