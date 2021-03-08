import  axios  from  "./axios";

export  default {
    query:(params)=>{
        return  axios({
            method:"get",
            url:"/api/menuinfo",
            params
        })
    },
    add:(data)=>{
        return  axios({
            method:"post",
            url:"/api/menuinfo",
            data
        })
    }
}