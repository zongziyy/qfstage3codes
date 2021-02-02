var mongoose = require("./db.js"); //引入mongoose
var schema = mongoose.Schema; //模型生成器(表生成器)

//建立表 并且指定字段
var userSchema = new schema({
    username: String,
    userpwd: String,
    userType: Number, //表示用户类型1是老师  2是学生
});

//转成数据模型导出 到数据库中 表名会是userinfos
module.exports = mongoose.model("userinfo", userSchema);