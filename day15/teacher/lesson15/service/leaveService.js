let leaveModel  = require("../model/leaveTable");

module.exports = {
    add:(info)=>{//新增
        return  leaveModel.insertMany([info]);
    },
    query:(info)=>{
        return leaveModel.find(info)
    },
    queryAll:(info,skipnum,shownum)=>{//分页接口
        return leaveModel.find(info).populate("userid").skip(skipnum).limit(shownum)
    },
    update:(info1,info2)=>{//根据info1去更新info2
        return  leaveModel.updateOne(info1,info2)
    },
    count:(info)=>{
        return  leaveModel.find(info).count();
    },
    group:()=>{//根据用户来分组统计请假次数
        return  leaveModel.aggregate([
            {
                $group:
                {
                    _id:"$userid",//
                    count: { $sum: 1 }//类似于.count 但这是是管道函数　　所以还需要加上$sum关键词
                },
            },
        ])

    }
}