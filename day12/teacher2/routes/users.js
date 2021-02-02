var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var crypto  = require("crypto");
let userinfoService = require("../service/userinfo");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get("/login", (req, res, next) => {
  // res.send("6666")
  res.render('users/login');
})
router.get("/list", (req, res, next) => {
  if (req.session && req.session.loginName) {
    res.render('users/list', {
      title: "列表页面",
      list: [{
        id: 1, username: "leson", userage: 18
      }, {
        id: 2, username: "lulu", userage: 17
      }, {
        id: 3, username: "lili", userage: 16
      }]
    });

  } else {
    res.redirect("login");
  }
  //请求数据

})

router.get("/getlist", (req, res, next) => {

  let token = req.headers.token;
  jwt.verify(token, "abc", function (err, code) {
    if (!err) {
      res.json({
        code: 1,
        msg: "请求的列表的接口"
      })
    } else {
      res.json({
        code: 0,
        msg: "token异常"
      })
    }
  })


});
router.post("/login", (req, res, next) => {
  let { username, userpwd } = req.body;

  //seesion存数据
  req.session.loginName = username;

  var token = jwt.sign({
    username: username
  }, "abc", {
    expiresIn: 60 * 60 * 1 * 0.5  // 半个小时过期
  })


  res.json({
    code: 1,
    token: token,
    msg: "接收到的用户名为:" + username + "密码为:" + userpwd
  })

})

router.post("/register", (req, res, next) => {

  let { username, userpwd } = req.body;

  //新增
  userinfoService.query({ username }).then(list => {//查询肯定是返回结果集
    if (!list.length) {//有数据就报错
        //密码应该加密
        var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
        userpwd = md5.update(userpwd).digest('hex');//进行加密

      userinfoService.add({
        username,
        userpwd,
        userType: 1
      }).then(result => {
        //新增成功
        //console.log(result);

        res.json({
          code: 1,
          msg: "成功"
        })

      }, err => {
        //新增失败
        //console.log(err);

        res.json({
          code: 0,
          msg: "新增失败"
        })

      })



    } else {
      res.json({
        code: 0,
        msg: "该用户名已经存在"
      })
    }

  })





});

module.exports = router;
