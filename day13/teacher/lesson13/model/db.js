//放的是数据库的链接信息
//链接数据库的信息
var mongoose = require("mongoose");
var DB_URL = "mongodb://localhost:27017/2009";
mongoose.connect(DB_URL,{useNewUrlParser: true });
//状态的监听
mongoose.connection.on("connected",function () {
    console.log("连接成功");
});
mongoose.connection.on("error", function (err) {
    console.log(err);
});
mongoose.connection.on("disconnected", function () {
    console.log("连接断开");
});
//导出方便其他地方使用
//commonjs

module.exports = mongoose;