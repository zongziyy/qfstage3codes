let userinfoModel = require("../model/userinfoSchema");
//这里数据库 2009中的userinfos这张表
//需要对这个表 进行增删改查
let  userinfoService={
    add:(info)=>{//新增的业务
        return  userinfoModel.insertMany([info]);
    },
    query:(info)=>{//查询的业务
        return  userinfoModel.find(info)
    }
}

module.exports = userinfoService;

