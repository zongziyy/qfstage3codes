let http = require('http');

http.createServer((req, res) => {

    res.write("123");
    res.end();
}).listen(8888, () => {
    console.log("启动成功,访问:localhost:8888")
})