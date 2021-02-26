let  orderModel = require("./orderTable");

let  order = {
    add:(info)=>{
        return orderModel.insertMany(info)
    },//新增功能
    query:(info)=>{
        return orderModel.find(info)
    }//查询功能

}
module.exports = order;
