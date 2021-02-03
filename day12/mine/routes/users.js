var express = require('express');
var router = express.Router();

let userinfoService = require('../service/userInfo')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/login', (req, res, next) => {
    userinfoService.add({
        username: 'zongziii',
        userpwd: '123456',
        usertype: 1
    }).then(result => {
        console.log(result)
        res.json({
            code: 1,
            msg: '注册成功'
        })
    })

})
module.exports = router;