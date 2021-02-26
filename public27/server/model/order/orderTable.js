var mongoose = require("../db.js");
var schema = mongoose.Schema; //模型生成器(表生成器)

//建立表 并且指定字段
var orderSchema = new schema({
    orderid:String,//订单编号
    partaid:String,//甲方编号
    partbid:String,//乙方编号
    productname:String,//产品名称
    productmodel:String,//产品型号
    productcolor:String,//颜色 后期变成type 常量设置的的
    productlight:String,//光源
    productdirection:String,//方向
    productsize:Number,//规格(mm)
    productnum:Number,//数量
    productprice:Number //产品价格
});
//转成数据模型导出
module.exports = mongoose.model("order", orderSchema);