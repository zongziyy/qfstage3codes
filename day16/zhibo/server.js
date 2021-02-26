let  ws = require("ws");

let  server  = new  ws.Server({
    port:8911
})


server.on("open", function () {
    console.log("open");
});
server.on("close",function(){
    console.log("close");
})

server.on("connection",(ren)=>{//表示有人链接


        ren.on("message",(data)=>{ //表示连的人 发送了消息

            // console.log(data);
            //后端要把收到的消息 给每一个在使用的人

            server.clients.forEach(item=>{//item就是每一个人    
                item.send(data); //让每一个人都得到消息
            })


        })

})