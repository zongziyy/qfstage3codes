let  http =  require("http");
let  url1 = require("url");

http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/html;charset=utf8",
        "Access-Control-Allow-Origin":"*"
    });//头部配置
    //根据请求不一样  返回的结果也就不一样
    if(req.url!="/favicon.ico"){
        let  url   = req.url.substring(1);
        url = url.split("?")[0];
        switch(url){
            case  "list":

                res.write(`{
                    "code":1,"msg":"list"
                }`);
                break;
            case  "add":
                res.write(`{
                    "code":1,"msg":"add"
                }`);    
                break;
            case  "update":
                res.write(`{
                    "code":1,"msg":"update"
                }`);    
                break;
            case  "del":
                //如果没有id就报错

                let  params  = url1.parse(req.url,true).query;
                if(params.id){
                    res.write(`{
                        "code":1,"msg":"删除的编号为${params.id}"
                    }`);
                }else{
                    res.write(`{
                        "code":0,"msg":"该请求没有带id"
                    }`);
                }

                   
                break;
            default:
                res.write(`{
                    "code":1,"msg":"首页"
                }`);    
                break;    
        }
      
        //返回结果
        res.end();
    }
   
}).listen(3333,()=>{
    console.log("服务启动成功:http://localhost:3333");
})