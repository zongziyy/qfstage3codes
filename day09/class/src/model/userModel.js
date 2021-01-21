import  axios from "./axios"
export  default  {
    query:(params)=>{
         return  axios({
             method:"get",
             url:"userinfos",
             params
         })
    },
    add:(params)=>{
        return  axios({
            method:"post",
            url:"userinfos",
            data:params
        })
    }
}