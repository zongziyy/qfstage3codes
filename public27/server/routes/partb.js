var express = require('express');
const partbInfo = require('../model/partb');
var router = express.Router();
var partbinfo = require("../model/partb");

/* GET home page. */
router.get('/list', function(req, res, next) {
    partbInfo.list().then(result=>{
        res.json({
            code:1,
            msg:result
        })
    })
});
router.post("/add",(req,res,next)=>{
    let  {partbname,fax}= req.body;
    partbinfo.add({partbname,fax}).then((result)=>{
        if(result.length){
            res.json({
                code:1,
                msg:"成功"
            })
        }
    })
})

module.exports = router;
