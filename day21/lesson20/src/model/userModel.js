import  axios from  "./axios";

export  default {
    login:(params)=>{
        return axios({
            method:"get",
            url:"/api/userinfo",
            params
        })
    },
    query:(params)=>{
        return axios({
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