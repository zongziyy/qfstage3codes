var express = require('express');
var router = express.Router();

/* GET users listing. */
//请求接口地址 得到了页面  history模式    也是前后端不分离
//更是服务端渲染ssr 客户端渲染 bsr
router.get('/', function(req, res, next) { // 访问users
    res.render("user/list");
});
router.get("/register", (req, res, next) => {
    res.render("user/register");
});
router.post("/register", (req, res, next) => {
    //这要接收参数  把用户名和密码 写入数据库
    let { username, userpwd } = req.body; //post请求从body get请求从req.query


    res.json({
        code: 1,
        msg: "接收的数据为" + username + "密码为:" + userpwd,
    })
})

module.exports = router;