const { json } = require('express');
var express = require('express');
const partaInfo = require('../model/parta');
var router = express.Router();
var partainfo = require("../model/parta");

/* GET home page. */
router.get('/list', function(req, res, next) {
    partaInfo.list().then(result=>{
        res.json({
            code:1,
            msg:result
        })
    })
});
router.post("/add",(req,res,next)=>{
    // partaname:String,//名称
    // tel:String,//电话
    // date:Date,//日期
    let  {partaname,tel,date}= req.body;
    partainfo.add({partaname,tel,date}).then((result)=>{
        if(result.length){
            res.json({
                code:1,
                msg:"成功"
            })
        }
    })
})

module.exports = router;
