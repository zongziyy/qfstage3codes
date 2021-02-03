let leaveModel  = require("../model/leaveTable");

module.exports = {
    add:(info)=>{//新增
        return  leaveModel.insertMany([info]);
    },
    query:(info)=>{
        return leaveModel.find(info)
    }
}