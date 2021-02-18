var mongoose = require("./db.js");//引入mongoose
var schema = mongoose.Schema; //模型生成器(表生成器)

//建立表 并且指定字段
var leaveSchema = new schema({
    userid:{type:mongoose.Schema.Types.String,ref:"userinfo"},//用户编号 是一个外键   需要做关联  关联到 userinfos
    leaveReason:String,//请假的理由
    startDate:Date,//请假的开始时间
    endDate:Date,//请假的介绍时间
    pic:String,//照片的地址  可选
    type:Number,//1表示待审批  2:同意   3:拒绝
});

//转成数据模型导出 到数据库中 表名会是leaveInfos
module.exports = mongoose.model("leaveInfo", leaveSchema);