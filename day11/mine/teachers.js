let http = require("http");
let fs = require("fs");
let cherrio = require("cheerio");

http.get("http://www.mobiletrain.org/teacher/", res => {
    let result = "";

    res.on("data", chunk => {
        result += chunk
    })
    res.on("end", () => {
        let $ = cherrio.load(result)
        // fs.writeFile("damo.html", result, () => {
        //     console.log("写入完成")
        // })
        fs.readFile("./demo/module.html", { encoding: "utf8" }, (err, data) => {
            if (!err) {
                $(".jiangshi1 li").each((index, item) => {
                    let teachername = $(item).find("h6").html();
                    let teacherinfo = $(item).find(".jieshao").html();
                    let teacherimg = $(item).find("img").attr("src");
                    let detail = $(item).attr("onclick").slice(13, -2);

                    let newStr = data.replace("{{teachername}}", teachername).replace("{{teacherinfo}}", teacherinfo).replace("{{teacherimg}}", teacherimg).replace("{{detail}}", detail)
                    fs.writeFile("./demo/" + teachername.split(":")[1] + new Date().getTime() + ".html", newStr, () => {

                        console.log("写入完成")
                    })

                })
            }
        })
    })

})