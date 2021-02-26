var mongoose = require("../db.js");
var schema = mongoose.Schema; //模型生成器(表生成器)

//建立表 并且指定字段
var userSchema = new schema({
    username:String,
    userpwd:String,
    usertype:Number,//1:表示管理员  
    //后续可能公司大了部门多了 区域经理多了 每个人看自己的订单
});

//转成数据模型导出
module.exports = mongoose.model("userinfo", userSchema);