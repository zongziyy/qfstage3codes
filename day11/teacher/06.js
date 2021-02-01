let http = require("http");
http.createServer((req, res) => {
    console.log(req.url); //req表示的请求信息
    res.writeHead(200, {
        "content-type": "text/html;charset=utf8",
        "Access-Control-Allow-Origin": "*"
    })
    res.write("<button onclick='alert(123)' style='color:red'>77777</button>");
    res.end();
}).listen(2345, () => {
    console.log("服务启动成功:http://localhost:2345")
})
//history模式 需要后端直接返回页面结构