let fs  = require("fs");
let  username = "lili";

fs.readFile("01.html",{encoding:"utf8"},(err,data)=>{
    if(!err){
        //这里有data 是字符串
        let newData = data.replace("{{username}}",username)
        
        fs.writeFile(username+".html",newData,()=>{
            console.log("写入成功")
        })
        
    }
})

