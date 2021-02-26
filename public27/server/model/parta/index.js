let  partaModel = require("./partaTable");

let  partaInfo ={
    add:(info)=>{
     return   partaModel.insertMany([info])
    },
    list:()=>{
        return  partaModel.find();
    }
}
module.exports = partaInfo;