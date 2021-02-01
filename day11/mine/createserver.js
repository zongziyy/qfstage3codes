let http = require("http");

http.createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })
    // console.log(req, res);
    let href = req.url;
    console.log(href);
    if (href != "/favicon.ico") {
        let params = href.parse()
    }
        res.writeHead(200, {
            "content-type": "text/html;charset=utf8",
            "Access-Control-Allow-Origin": "*"
        })
    res.write("55555");
    res.end();

}).listen(7777, () => {
    console.log("服务启动成功,访问:http://localhost:7777");
})