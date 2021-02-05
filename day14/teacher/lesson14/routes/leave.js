var express = require('express');
var router = express.Router();
let jwt = require("jsonwebtoken");
let leaveService = require("../service/leaveService");

router.patch("/update", (req, res, next) => {
    let { _id, type } = req.body;
    //解析token
    leaveService.update({ _id }, { type }).then((result) => {
        if (result.nModified > 0) { //表示受影响的行数
            res.json({
                code: 1,
                msg: "更新成功"
            })

        } else {
            res.json({
                code: 0,
                msg: "更新失败"
            })
        }

    })


})

//老师登录以后 访问的接口
router.get("/teacher", (req, res, next) => {
    //get请求
    let { pageindex, shownum } = req.query; //这里不是body  

    let token = req.headers.token;
    jwt.verify(token, "abc", async (err, info) => {
        if (!err) { //没有错
            if (info.usertype == 1) {

                let count = await leaveService.count({});
                //里面才是老师查询所有学生  每页显示五条数据
                leaveService.queryAll({}, (pageindex - 1) * shownum, shownum * 1).then(list => {
                    //加入一个接口 返回总条件
                    res.json({
                        code: 1,
                        list,
                        count
                    })
                })
            } else {
                res.json({
                    code: 2,
                    msg: "权限不够"
                })
            }
        } else {
            res.json({
                code: 0,
                msg: "token异常"
            })
        }
    });
})

/* GET home page. */
router.get("/student", (req, res, next) => { //学生的请假
    let token = req.headers.token;
    jwt.verify(token, "abc", (err, info) => { //解析token
        if (!err) {
            //没有错
            if (info.usertype == 2) { //表示学生
                let userid = info.userid; //学生的id
                // console.log(userid);
                leaveService.query({ userid }).then(list => { //查询结果
                    res.json({
                        code: 1,
                        list
                    })
                })
            } else {
                res.json({
                    code: 2,
                    msg: "权限不够",
                    path: "/"
                })
            }
        } else {
            res.json({
                code: 0,
                msg: "token异常",
                path: "/"
            })
        }
    })
})


router.post('/add', function(req, res, next) {
    //新增的接口   要数据
    //这个接口 只能是学生请假
    //第一步是解开token  判断权限
    let token = req.headers.token; //获取token
    jwt.verify(token, "abc", function(err, info) {
        if (!err) {
            // console.log(code);
            if (info.usertype == 2) {
                //是学生  获取请假的数据

                // userid:String,//用户编号
                // leaveReason:String,//请假的理由
                // startDate:Date,//请假的开始时间
                // endDate:Date,//请假的介绍时间
                // pic:String,//照片的地址  可选
                // type:Number,//1表示待审批  2:同意   3:拒绝
                let { leaveReason, startDate, endDate, pic } = req.body;
                // console.log(new  Date(startDate).toJSON());
                let userid = info.userid; //info存在token中
                let type = 1; //默认就是待审批
                startDate = new Date(startDate).toJSON();
                endDate = new Date(endDate).toJSON();

                leaveService.add({ userid, leaveReason, startDate, endDate, pic, type }).then(list => {
                    if (list.length) {
                        res.json({
                            code: 1,
                            msg: "请假成功",
                            info: list[0]
                        });
                    } else {
                        res.json({
                            code: 0,
                            msg: "请假失败"
                        })
                    }
                })

            } else {

                res.json({
                    code: 2,
                    msg: "权限不够"
                })

            }




        } else {
            res.json({
                code: 0,
                msg: "token异常"
            })

        }
    })





});

module.exports = router;