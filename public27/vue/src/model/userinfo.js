import  axios from  "./axios";
import qs  from  "qs";
let   user = {
    login:(username,userpwd)=>{//用户登录
        return  axios({
            method:"get",
            url:"/api/users/login",
            params:{
                username,
                userpwd
            }
        })
    },
    register:(info)=>{//注册
        return  axios({
            method:"post",
            url:"/api/users/register",
            data:qs.stringify(info)
        })
    },
    addmany:(list)=>{//批量新增
        return  axios({
            method:"post",
            url:"/api/users/addmany",
            data:qs.stringify(list)
        })
    }
}
export  default  user;