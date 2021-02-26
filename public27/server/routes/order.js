var express = require('express');
var router = express.Router();
var order  = require("../model/order")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/list",(req,res,next)=>{
    let  orderid = req.query.orderid;
    var info = {};
    if(orderid){
        info.orderid = orderid;
    }
    order.query(info).then((result)=>{
        res.json({
            code:1,
            list:result
        })
    },()=>{
        res.json({
            code:0,
            msg:"查询失败"
        })
    })
});
router.post("/add",(req,res,next)=>{
    let  {orderid,partaid,partbid,productname,productmodel,
        productlight,productdirection,productcolor,productsize,productnum,productprice}=req.body;
        //取值  新增
    order.add([{orderid,partaid,partbid,productname,productmodel,
        productlight,productdirection,productcolor,productsize,productnum,productprice}]).then((result)=>{
                if(result.length){
                    res.json({
                        code:1,
                        list:result
                    })
                }

        },(err)=>{
            res.json({
                code:0,
                msg:"失败"
            })
        })
})
module.exports = router;
