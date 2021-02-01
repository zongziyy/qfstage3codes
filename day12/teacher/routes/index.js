var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/render",(req,res,next)=>{//上面的是浏览器的地址
  res.render("render");//render就是渲染页面   下面是views中的页面
})

router.get("/json",(req,res,next)=>{
  res.json({
    code:1,
    msg:"ok"
  })
})

module.exports = router;
