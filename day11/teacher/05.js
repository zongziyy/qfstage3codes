let http = require("http");
let fs = require("fs");
let cheerio = require("cheerio");//服务端的DOM解析模块

http.get("http://www.mobiletrain.org/teacher/", (res) => {
    let result = "";
    res.on("data", (chunk) => {
        result += chunk;
    })
    res.on("end", () => {

        fs.readFile("./temp/demo.html", { encoding: "utf8" }, (err, data) => {
            //data就是整个模板字符串 解析就当字符串用
            if (!err) {//没有错
                let $ = cheerio.load(result);//解析成JQ的DOM
                $(".jiangshi1 li").each((index, item) => { //找到指定样式下面的li标签
                    //item就是li标签
                    //console.log( $(item).find("h6").html());
                    let teachername = $(item).find("h6").html();
                    let teacherjieshao = $(item).find(".jieshao").html();
                    let teacherimg = $(item).find("img").attr("src");
                    let detail = $(item).attr("onclick")
                    detail = detail.substring(13, detail.length - 2);
                    // console.log(detail);

                    let  newStr = data.replace("{{detail}}",detail).replace("{{teachername}}",teachername).replace("{{teacherjieshao}}",teacherjieshao).replace("{{teacherimg}}",teacherimg);
                    //生成一个新的字符串

                    teachername= teachername.split(":")[1];

                    // let  date = new  Date();
                    // date.getTime()
                    fs.writeFile("./temp/"+teachername+new Date().getTime()+".html",newStr,(err)=>{
                        if(!err){
                            console.log("写入完成");
                        }
                    })






                });
            }

        })
        //这段代码 只是来看页面内容的   
        // fs.writeFile("qianfeng.html",result,(err)=>{
        //     if(!err){
        //     }
        // })
    })

})