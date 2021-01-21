import  axios from  "./axios";

export  default {
    query:(params)=>{
            return  axios({
                mehtod:"get",
                url:"goodslist",
                params
            })
    }
}