var express = require('express');
var router = express.Router();
let jwt = require("jsonwebtoken");
let  leaveService =require("../service/leaveService");

/* GET home page. */
router.get("/student",(req,res,next)=>{//学生的请假

    let  token   = req.headers.token;

    jwt.verify(token,"abc",(err,info)=>{//解析token
        if(!err){
            //没有错
            if(info.usertype==2){//表示学生
                let  userid = info.userid; //学生的id
                leaveService.query({userid}).then(list=>{//查询结果
                    res.json({
                        code:1,
                        list
                    })
                }) 
            }else{
                res.json({
                    code:2,
                    msg:"权限不够"
                })
            }
        }else{
            res.json({
                code:0,
                msg:"token异常"
            })

        }



    })



})


router.post('/add', function(req, res, next) {
    //新增的接口   要数据
    //这个接口 只能是学生请假
    //第一步是解开token  判断权限
    let  token  = req.headers.token;//获取token
    jwt.verify(token, "abc", function (err, info) {
        if(!err){
            // console.log(code);
             if(info.usertype==2){
                    //是学生  获取请假的数据

                    // userid:String,//用户编号
                    // leaveReason:String,//请假的理由
                    // startDate:Date,//请假的开始时间
                    // endDate:Date,//请假的介绍时间
                    // pic:String,//照片的地址  可选
                    // type:Number,//1表示待审批  2:同意   3:拒绝
                    let  {leaveReason,startDate,endDate,pic}=req.body;
                    let  userid  = info.userid;//info存在token中
                    let  type =1;//默认就是待审批

                    leaveService.add({userid,leaveReason,startDate,endDate,pic,type}).then(list=>{

                            if(list.length){
                                res.json({
                                    code:1,
                                    msg:"请假成功",
                                    info:list[0]});
                            }else{
                                res.json({
                                    code:0,
                                    msg:"请假失败"
                                })
                            }
                    })

             }else{

                res.json({
                    code:2,
                    msg:"权限不够"
                })

             }   




        }else{
            res.json({
                code:0,
                msg:"token异常"
            })

        }
    })
    


   
   
});

module.exports = router;
