let  partbModel = require("./partbTable");

let  partbInfo ={
    add:(info)=>{
     return   partbModel.insertMany([info])
    },
    list:()=>{
        return  partbModel.find();
    }
}
module.exports = partbInfo;