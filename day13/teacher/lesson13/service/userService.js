let userModel = require("../model/userTable");

module.exports = {
    add:(info)=>{
      return  userModel.insertMany([info])
    },
    query:(info)=>{
      return  userModel.find(info)
    }

}