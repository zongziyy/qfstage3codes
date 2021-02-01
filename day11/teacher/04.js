let http = require("http");

http.createServer((req,res)=>{

    res.writeHead(200,{
        "content-type":"text/html;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
    })
    // res.write("6666");
    // res.end();

    http.get("http://localhost:1234/2005/php/goodslist.php?key=&shownum=10&skipnum=0",(res1)=>{
    let result = "";
    res1.on("data",(chunk)=>{
        result += chunk;
    })
    res1.on("end",()=>{
        // console.log(result);
         res.write(result);
         res.end();
    })
})



}).listen(4567,()=>{
    console.log("启动成功访问:http://localhost:4567")
});