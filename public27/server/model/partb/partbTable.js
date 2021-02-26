var mongoose = require("../db.js");
var schema = mongoose.Schema; //模型生成器(表生成器)
//建立表 并且指定字段
var partbSchema = new schema({
    partbname:String,
    fax:String,//传真
});
//转成数据模型导出
module.exports = mongoose.model("partb", partbSchema);