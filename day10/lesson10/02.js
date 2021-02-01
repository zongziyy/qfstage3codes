let http = require("http"); //网络模块(net)中http
//自带的模块  安装node.js以后就有的
//可以发送请求  和 提供服务

http.createServer((req, res) => {//req:请求 (页面端的动作)  res:(服务器的响应)
    res.write("6666");
    res.end();
}).listen(6789)