import  axios  from  "./axios";

export  default {
    query:(params)=>{
        return  axios({
            method:"get",
            url:"/api/userinfo",
            params
        })
    },
    add:(data)=>{
        return  axios({
            method:"post",
            url:"/api/userinfo",
            data
        })
    }
}