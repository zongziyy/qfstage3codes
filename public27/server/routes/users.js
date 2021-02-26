var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var jwt = require("jsonwebtoken");

let user = require("../model/user");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get("/login", (req, res, next) => {
  let { username, userpwd } = req.query; //密码没有加密
  //比较的时候需要加密
  var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
  userpwd = md5.update(userpwd).digest('hex');

  user.query({ username, userpwd }).then((data) => {
    if (data.length) {//表示有数据
      let usertype = data[0].usertype
      let userid = data[0]["_id"];
      var token = jwt.sign(
        { username, type: usertype, userid },
        "key", {
        expiresIn: 60 * 60 * 1  // 1小时过期
      })
      res.json({
        code: 1,
        msg: "成功",
        token: token,
        path: usertype == 1 ? "teacher" : "student",
      })
    } else {
      res.json({
        code: 0,
        msg: "用户名和密码不匹配"
      })
    }
  })


});

router.post("/register", (req, res, next) => {
  let { username, userpwd } = req.body;//解构取值
  //新增之前 判断用户名是否存在
  user.query({ username }).then((data) => {
    if (data.length) {//用户名存在
      res.json({
        code: 0,
        msg: "该用户已经存在"
      })

    } else {//不存在   注册
      var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
      userpwd = md5.update(userpwd).digest('hex');
      user.register({ username, userpwd, usertype: 1 }).then((data) => {
        //console.log(data);
        res.json({
          code: 1,
          msg: "注册成功"
        })
      })
    }
  })
  //密码需要加密
})


router.post("/addmany", (req, res, next) => {
  let { list } = req.body;//解构取值
  // console.log(JSON.parse(list));//[{username:"leson1"},{username:"leson2"}]
  //[{username:"leson1",userpwd:"123456",usertype:2}]
  var newList = JSON.parse(list);
  var md5 = crypto.createHash('md5');
  var userpwd = userpwd = md5.update("123456").digest('hex');
  var type = 2;
  newList.forEach(item => {//重新整理集合
    item.userpwd = userpwd;
    item.usertype = type;
  })
  user.addmany(newList).then((data) => {
    if (data.length) {
      res.json({
        code: 1,
        msg: "新增成功"
      })
    } else {
      res.json({
        code: 0,
        msg: "新增失败"
      })
    }
  }, () => {
    res.json({
      code: 0,
      msg: "新增失败"
    })
  })


})

module.exports = router;
