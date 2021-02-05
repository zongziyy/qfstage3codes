var express = require('express');
var router = express.Router();
var crypto = require("crypto");
let jwt = require('jsonwebtoken');

let userinfoService = require('../service/userInfo');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/login', (req, res, next) => {
    let { username, userpwd } = req.body;
    // console.log(info);
    var md5 = crypto.createHash('md5'); //crypto模块功能是加密并生成各种散列
    userpwd = md5.update(userpwd).digest('hex'); //进行加密
    userinfoService.query({ username, userpwd }).then(list => {
        if (!list.length) {
            res.json({
                code: 0,
                msg: "用户名与密码不匹配"
            })
        } else {
            // res.send("√")
            let token = jwt.sign({
                username,
                usertype: list.usertype,
                userid: info._id,
            }, "zong", {
                expiresIn: 60 * 60 * 1 * 2 // 半个小时过期
            })
            res.json({
                code: 1,
                token: token,
                path: list.usertype == 1 ? "teacher" : "student",
                msg: "登录成功"
            })
        }
    })
});

router.post('/register', (req, res, next) => {
    // console.log(req)
    let { username, userpwd } = req.body;
    // console.log(username, userpwd);
    userinfoService.query({ username }).then(list => {
        if (list.length) {
            res.json({
                code: 0,
                msg: '用户名已存在'
            })
        } else {
            var md5 = crypto.createHash('md5'); //crypto模块功能是加密并生成各种散列
            userpwd = md5.update(userpwd).digest('hex'); //进行加密

            userinfoService.add({
                username,
                userpwd,
                usertype: 1
            }).then(result => {
                console.log(result)
                res.json({
                    code: 1,
                    msg: '注册成功'
                })
            }, err => {
                res.json({
                    code: 1,
                    msg: '注册成功'
                })
            })
        }
    })
})
module.exports = router;