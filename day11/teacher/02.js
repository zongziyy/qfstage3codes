let fs = require("fs");


let username = "xiaowang";
let taohuaList = ["人见人爱", "大众情人", "狗见嫌", "命犯孤星"];
let caiyunList = ["出门掉钱", "出门捡钱", "中彩票", "股票暴涨", "基金暴跌"];


fs.readFile("template.html", { encoding: "utf-8" }, (err, data) => {
    if (!err) {
        // console.log(data);
        // 数组的随机取值 就是取下标
        let  taohuayun = taohuaList[Math.round(Math.random()*(taohuaList.length-1))];
        let  caiyun   = caiyunList[Math.round(Math.random()*(caiyunList.length-1))]
        let html = data.replace("{{username}}",username).replace("{{taohuayun}}",taohuayun).replace("{{caiyun}}",caiyun);

        fs.writeFile(username+".html",html,()=>{
            console.log("写入完成");
        })
    }
})