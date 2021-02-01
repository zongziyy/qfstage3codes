let fs = require("fs");//fs:fileSystem

//文件可以读写

fs.readFile("./01.txt",{encoding:"utf-8"},(err,data)=>{
     console.log(data);
})

