var mongoose = require("../db.js");
var schema = mongoose.Schema; //模型生成器(表生成器)

//建立表 并且指定字段
var partaSchema = new schema({
    partaname:String,//名称
    tel:String,//电话
    date:Date,//日期
});
//转成数据模型导出
module.exports = mongoose.model("parta", partaSchema);