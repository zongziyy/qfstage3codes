var express = require('express');
var router = express.Router();
let crypto = require("crypto");
var jwt = require("jsonwebtoken");
let userService = require("../service/userService");


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post("/login", async (req, res, next) => {

  let { username, userpwd } = req.body;

  //用户名和密码的判断
  var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
  userpwd = md5.update(userpwd).digest('hex');//进行加密

  let [info] = await userService.query({ username, userpwd });
  if (info) {
    var token = jwt.sign({
      username,
      userid: info._id,
      usertype: info.usertype
    }, "abc", {
      expiresIn: 60 * 60 * 1 * 2  // 半个小时过期
    })
    res.json({
      code: 1,
      token: token,
      path: info.usertype == 1 ? "teacher" : "student",
      msg: "登录成功"
    })
  } else {
    res.json({
      code: 0,
      msg: "用户名和密码不匹配"
    })
  }

  // userService.query({username,userpwd}).then(list=>{
  //   if(list.length){
  //     res.json({
  //       code:1,
  //       msg:"登录成功"
  //     })
  //   }else{
  //     res.json({
  //       code:0,
  //       msg:"用户名和密码不匹配"
  //     })
  //   }

  // })




})
router.post("/insertmany", (req, res, next) => {
  //获取前端传来的list数据

  let list1 = req.body.data;//接收的list
  // console.log(typeof list);list是一个对象
  //list = JSON.parse(list);//将字符串转成对象
  //[{username:"leson"},{username:"lili"}]
  //判断集合中用户名是否存在
  let array = list1.map(item => item.username);
  //array变成了 ["leson","lili'"];

  userService.query({ username: { $in: array } }).then(list => {
    if (list.length) {//有长度 就说明表格中有  已经存在的数据
      let existUsernameStr = list.map(item => item.username).join(',');
      res.json({
        code: 0,
        msg: "以下人员已经存在" + existUsernameStr
      })
    } else {
      //没有就新增
      let userpwd = "123456";
      let usertype = 2;
      var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
      userpwd = md5.update(userpwd).digest('hex');//进行加密

     let newList = list1.map(item => {//item是一个对象
        item.userpwd = userpwd;
        item.usertype = usertype;
        return item;
      })

       console.log(newList);
      //集合需要重组  [{username:"leson",userpwd:123456,usertype:2}]
      userService.insertMany(newList).then(result => {
        if (result.length) {
          res.json({
            code: 1,
            msg: "批量新增成功"
          })
        } else {
          res.json({
            code: 0,
            msg: "批量新增失败"
          })
        }


      })




    }
  })









})

router.post("/register", async (req, res, next) => {

  let { username, userpwd, usertype } = req.body;

  let [data] = await userService.query({ username })
  if (data) {//没有就是  undefined
    res.json({
      code: 0,
      msg: "该用户名已经存在"
    })
  } else {
    //这里做新增
    var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
    userpwd = md5.update(userpwd).digest('hex');//进行加密

    let [result] = await userService.add({
      username, userpwd, usertype
    })

    if (result) {
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
  }

});

// router.post("/register",(req,res,next)=>{
//   let  {username,userpwd}=req.body;
//   userService.query({username}).then(list=>{
//     if(list.length){//表示存在
//       res.json({
//         code:0,
//         msg:"该用户名已经存在"
//       })
//     }else{
//       //这里需要对密码进行加密
//       var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
//       userpwd = md5.update(userpwd).digest('hex');//进行加密

//       userService.add({
//         username,
//         userpwd,
//         usertype:1
//       }).then(result=>{
//           console.log(result);
//           res.json({
//             code:1,
//             msg:"成功"
//           })
//       })
//     }

//   })

// })

module.exports = router;
